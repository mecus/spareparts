import * as mongoose from 'mongoose';
import { Document } from "mongoose";
import AccountModel from "./account.model";
const schemaTypes = mongoose.Schema.Types;

const Schema = mongoose.Schema;
const AddressSchema = new Schema({
    address: String,
    city: String,
    state: String,
    country: String,
    account_id: {type: schemaTypes.ObjectId}
});

AddressSchema.pre("save", true, function(next, done) {
    // console.log(this);
    const thisAddress: any = this;
    const acUpdate: any = {};
    AccountModel.findById(thisAddress.account_id, (err: any, account: any) => {
        if (err) {
            next(err);
        }
        account.addresses.push(thisAddress._id);
        acUpdate.addresses = account.addresses;
        AccountModel.findByIdAndUpdate(thisAddress.account_id, acUpdate, {new: true}, (err, data) => {
            if (err) next(err);
            console.log(data);
        });
    });
    next();
    done();
});

const AddressModel = mongoose.model("AddressModel", AddressSchema);
export default AddressModel;