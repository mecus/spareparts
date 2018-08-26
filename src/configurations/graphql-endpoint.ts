const graphqlHTTP = require("express-graphql");
import gqlSchema from "../graphql/graphql.schema";
import { Request, Response, NextFunction } from "express";
import rootResolversFn from "../graphql/graphql.resolvers";

const graphqlHTTPendPoint = () => {
     return graphqlHTTP((req: any) => {
        // console.log(request);
        return {
            schema: gqlSchema,
            rootValue: rootResolversFn(req),
            graphiql: true,
            context: { user: req.user }
        };
    });
};
export default graphqlHTTPendPoint;
