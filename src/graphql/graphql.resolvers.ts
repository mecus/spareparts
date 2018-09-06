import { Request } from "express";
import accountResolver from "../resolvers/account-resolver";
import AdResolver from "../resolvers/ad-resolver";
import CategoryResolvers from "../resolvers/category-resolver";
import UserResolvers from "../resolvers/user-resolver";
import AddressResolvers from "../resolvers/address-resolver";

// Retrieve and Resolve values from the database

const rootResolversFn = (req: Request) => {
    // Use the request objects for form of validations
    // console.log(req.headers);
    return {
        ...accountResolver(req),
        ...AdResolver(),
        ...CategoryResolvers(),
        ...UserResolvers(),
        ...AddressResolvers()
    };
};
export default rootResolversFn;