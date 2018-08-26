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
    isActivated: schemaTypes.Boolean
}, {timestamps: {createdAt: "createdAt"}});

const AccountModel = mongoose.model("AccountModel", AccountSchema);
export default AccountModel;