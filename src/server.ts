import * as  http from "http";
import app from "./app-route/app";
import { LoggerManager } from "./logger-services/logger-manager";

const server = http.createServer(app);
server.on("error", serverError);
server.listen(app.get("PORT"), serverListener);

function serverError(event: any) {
    console.log(event);
    // LoggerManager({
    //     name: "Server Started",
    //     message: `Serving on localhost:${app.get("PORT")}`
    // }, false);
}
function serverListener() {
    LoggerManager({
            name: "Server Started",
            message: `Serving on localhost:${app.get("PORT")}`
    }, false);
}
export default server;
