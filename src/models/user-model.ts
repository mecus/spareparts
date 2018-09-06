import * as mongoose from "mongoose";
const bcrypt = require("bcrypt");
const Promises = require("promise");
// Later import bcrypt, crypto

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: String,
    password: String
},
{timestamps: {createdAt: "createdAt"}}
);

UserSchema.pre("save", true, function(next, done) {
    const user: any = this;
    const saltRound = 10;
    const passwordTohash = user.password;
    bcrypt.genSalt(saltRound, function(err: any, salt: any) {
        if (err) {
            return next(err);
        }
        bcrypt.hash(passwordTohash, salt, function(err: any, hash: any) {
            if (err) {
                return next(err);
            }
            user.password = hash;
            next();
        });
    });
    done();
});

UserSchema.methods.validatePassword = function(password: String) {
    const hashPassword = this.password;
    return ( async() => {
        const bcy = await bcrypt.compare(password, hashPassword);
        if (!bcy) {
            return false;
        }
        return true;
    })();
};
const UserModel = mongoose.model("UserModel", UserSchema);
export default UserModel;