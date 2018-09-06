import AddressModel from "../models/address.model";
import AddressInterface from "../types/address.type";
import { LoggerManager } from "../logger-services/logger-manager";
import * as Promises from "promise";

export class Address extends AddressModel {
    private address: String;
    private city: String;
    private state: String;
    private country: String;
    private account_id: String;
    constructor(private _address: AddressInterface) {
        super();
        this.address = _address.address;
        this.city = _address.city;
        this.state = _address.state;
        this.country = _address.country;
        this.account_id = _address.account_id;
    }

    public saveAddress = async(address: any) => {
        return await new Promises((resolve, reject) => {
            address.save((err: any, data: any) => {
                if (err) {
                    LoggerManager(err, true);
                    reject(err);
                }
                resolve(data);
            });
        });
    }
}