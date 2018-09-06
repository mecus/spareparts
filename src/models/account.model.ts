import * as mongoose from 'mongoose';
import { Document } from "mongoose";
const schemaTypes = mongoose.Schema.Types;

const Schema = mongoose.Schema;
const AccountSchema = new Schema({
    first_name: String,
    last_name: String,
    phone: String,
    email: String,
    account_type: String,
    addresses: [{type: schemaTypes.ObjectId, ref: "AddressModel"}],
    isActivated: schemaTypes.Boolean
}, {timestamps: {createdAt: "createdAt"}});

// Validate user account here by creating validation methods

const AccountModel = mongoose.model("AccountModel", AccountSchema);
export default AccountModel;