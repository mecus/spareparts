
export const stringLimitter = (str: String, stNum: number, enNum: number): String => {
    if (str.length > 50) {
        return str.slice(stNum, enNum) + "...";
    }
    return str;
};