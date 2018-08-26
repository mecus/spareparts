import * as mongoose from 'mongoose';
import { Document } from "mongoose";
const schemaTypes = mongoose.Schema.Types;

const Schema = mongoose.Schema;
const AddressSchema = new Schema({
    address: String,
    city: String,
    state: String,
    country: String,
    account_id: String
});

const AddressModel = mongoose.model("AddressModel", AddressSchema);
export default AddressModel;