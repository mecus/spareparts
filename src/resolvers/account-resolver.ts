import { UserAccount } from "../controllers/account-controller";
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
            if (user.uid !== arg.id) {
                return null;
            }
            return UserAccount.getUserAccount(arg.id);
        },
        QueryAccounts: () => {
            const query = {
                "isActivated": true
            };
            return UserAccount.queryUserAccount(query);
        },
        CreateUserAccount: (input: any) => {
            // console.log(input);
            const account = new UserAccount(input.user);
            return account.saveUserAccountToDB(account);
        }
    };
}