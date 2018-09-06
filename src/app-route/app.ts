import * as express from "express";
import databaseConnect from "../configurations/mongoose.config";
import { Request, Response, NextFunction } from "express";
import { LoggerManager } from "../logger-services/logger-manager";
import graphqlHTTPendPoint from "../configurations/graphql-endpoint";
const cors = require("cors");
const { GraphQLError } = require("graphql");

const app = express();
databaseConnect();

app.set("PORT", process.env.NODE_ENV || 3000);
app.get("/", (req, res, next) => {
    res.send("Car parts Page");
});
app.use(cors());
app.use((req: any, res: Response, next: NextFunction) => {
    req.user = {username: "misco", uid: "5b7eab110fe5f0dabc830867"};
    next();
});
// app.use((req, res, next) => {
//     throw new Error("Node request error occur");
// });
// Handling Graphql Endpoints
app.use("/graphql", graphqlHTTPendPoint());

// Handle Express Error Middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (res.headersSent) {
        return LoggerManager(err, true);
    }
    LoggerManager(err, true);
    res.status(500).json({"Error": "Internal server error occur"});
});
export default app;
