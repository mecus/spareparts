import UserModel from "../models/user-model";
import { UserType } from "../types/user-type";
import { LoggerManager } from "../logger-services/logger-manager";
import * as Promises from "promise";

export class User extends UserModel {
    private email: String;
    private password: String;

    constructor(private _user: UserType) {
        super();
        this.email = _user.email;
        this.password = _user.password;
    }

    public saveUser = async(user: any) => {
        return await new Promises((resolve: any, reject: any) => {
            user.save((err: any, ref: any) => {
                if (err) {
                    LoggerManager(err, true);
                    reject(err);
                }
                resolve(ref);
            });
        });
    }

    static checkUser = async(user: any) => {
        return await new Promises((resolve: any, reject: any) => {
            return UserModel.findOne({email: user.email}, (err: any, res: any) => {
                if (err) {
                    reject(err);
                }
                const retu = res.validatePassword(user.password);
                console.log(retu);
                // .then((res: any) => {
                //     console.log(res);
                // });
                resolve(res);
            });
        });
    }
}