import { stringLimitter } from "../utils/string-length-limiter";
const chalk = require("chalk");

interface Log {
    name: String;
    message: String;
}
function dateFormatInSeconds(): String {
    const date: Date = new Date;
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

export const LoggerManager = (log: Log, isError: boolean): boolean => {
const msg = log.message;
if (isError) {
console.log(`
[${chalk.gray(dateFormatInSeconds())}] [${chalk.magenta("NAME")}]: ${chalk.red(log.name)}
[${chalk.gray(dateFormatInSeconds())}] [${chalk.magenta("MESSAGE")}]: ${chalk.red(stringLimitter(msg, 0, 50))}
`);
} else {
console.log(`
[${chalk.gray(dateFormatInSeconds())}] [${chalk.magenta("NAME")}]: ${chalk.cyan(log.name)}
[${chalk.gray(dateFormatInSeconds())}] [${chalk.magenta("MESSAGE")}]: ${chalk.cyan(stringLimitter(msg, 0, 50))}
`);
}
return false;
};