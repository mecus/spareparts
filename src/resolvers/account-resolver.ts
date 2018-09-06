import { Account } from "../controllers/account-controller";
import { Request } from "express";

export interface AccountResolverType {
    QueryAccount(arg: any, context: any): any;
    QueryAccounts(): any;
    CreateUserAccount(input: any): any;
}

export default function accountResolver(req: any): AccountResolverType {
    return {
        QueryAccount: (arg: any, context: any) => {
            const { user } = context;
            // if (user.uid !== arg.id) {
            //     return null;
            // }
            return Account.getUserAccount(arg.id);
        },
        QueryAccounts: () => {
            const query = {
                // "isActivated": true
            };
            return Account.queryUserAccount(query);
        },
        CreateUserAccount: (input: any) => {
            // console.log(input);
            const account = new Account(input.user);
            return account.saveUserAccountToDB(account);
        }
    };
}