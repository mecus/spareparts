import AddressInterface from "./address.type";
import { Document } from "mongoose";

export default interface AccountInterface extends Document {
    first_name: String;
    last_name: String;
    phone: String;
    email: String;
    account_type: String;
    isActivated: boolean;
    addresses: [AddressInterface];
}