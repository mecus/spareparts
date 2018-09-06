const Promises = require("promise");
import { Document, Mongoose } from "mongoose";
import { LoggerManager } from "../logger-services/logger-manager";
import AccountInterface from "../types/account.type";
import AddressInterface from "../types/address.type";
import AccountModel from "../models/account.model";

export class Account extends AccountModel implements AccountInterface {
    first_name: String;
    last_name: String;
    phone: String;
    email: String;
    account_type: String;
    isActivated: boolean;
    addresses: [AddressInterface];
    constructor(private account: AccountInterface) {
        super();
        this.first_name = account.first_name;
        this.last_name = account.last_name;
        this.phone = account.phone;
        this.email = account.email;
        this.account_type = account.account_type;
        this.isActivated = account.isActivated;
    }
    static queryUserAccount(query: any) {
        return new Promises((resolve: any, reject: any) => {
            return AccountModel.find(query).populate("addresses")
            .exec((err, accounts) => {
                if (err) {
                    LoggerManager(err, true);
                    reject(err);
                }
                resolve(accounts);
            });
        });
    }
    static getUserAccount(id: string) {
        return new Promises((resolve: any, reject: any) => {
            AccountModel.findById(id).populate("addresses")
            .exec((err: any, account: any) => {
                if (err) {
                    LoggerManager(err, true);
                    reject(err);
                }
                resolve(account);
           });
        });
    }
    async saveUserAccountToDB(user: AccountInterface) {
        return await new Promises((resolve: any, reject: any) => {
            user.save((err: any, ref: any) => {
                if (err) {
                    reject(err);
                    return LoggerManager(err, true);
                }
                resolve(ref);
            });
        });
    }

}
