import { User } from "../controllers/user-controller";
interface UserResolversType {
    CreateUser(arg: any): any;
}

const UserResolvers = (): UserResolversType => {
    return {
        CreateUser: (arg: any) => {
            const { user } = arg;
            return User.checkUser(user);
            // const USER = new User(user);
            // return USER.saveUser(USER);
        }
    };
};
export default UserResolvers;