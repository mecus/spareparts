import * as mongoose from "mongoose";
import { LoggerManager } from "../logger-services/logger-manager";

const options = {
    useNewUrlParser: true,
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
};
const url = "mongodb://localhost:27017/sparepartsDB"; // url to the database

const databaseConnect = () => {
    const Connect = mongoose.connect(url, options);
    Connect.then(
    () => {
    LoggerManager(succussLogerOption(url), false);
    }, // Resolved connection
    (err: any) => {
    LoggerManager(failureLogerOption(url), true);
    } // Handle error here
    );
    return Connect;
};
function succussLogerOption(u: any) {
    return {
        name: "Database Success Connection",
        message: "MongoDB Connected at url: //" + u
    };
}
function failureLogerOption(u: any) {
    return {
        name: "Database Failed Connection",
        message: "MongoDB Failed to Connect to url: //" + u
    };
}
export default databaseConnect;
