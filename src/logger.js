const logColor = (color, message) => {
  console.log(`\x1b[%sm${message}\x1b[0m`, colors[color]);
};

const colors = {
    red: "31",
    green: "32",
    yellow: "33",
    blue: "34",
    magenta: "35",
    cyan: "36",
    white: "37",
    crimson: "38",
    gray: "90",
    brightRed: "91",
    brightGreen: "92",
    brightYellow: "93",
    brightBlue: "94",
    brightMagenta: "95",
    brightCyan: "96",
    brightWhite: "97",
};


const logBlue = (message) => logColor("blue", message);
const logRed = (message) => logColor("red", message);
const logGreen = (message) => logColor("green", message);
const logYellow = (message) => logColor("yellow", message);
const logMagenta = (message) => logColor("magenta", message);
const logCyan = (message) => logColor("cyan", message);
const logWhite = (message) => logColor("white", message);
const logCrimson = (message) => logColor("crimson", message);
const logGray = (message) => logColor("gray", message);
const logBrightRed = (message) => logColor("brightRed", message);
const logBrightGreen = (message) => logColor("brightGreen", message);
const logBrightYellow = (message) => logColor("brightYellow", message);
const logBrightBlue = (message) => logColor("brightBlue", message);
const logBrightMagenta = (message) => logColor("brightMagenta", message);
const logBrightCyan = (message) => logColor("brightCyan", message);
const logBrightWhite = (message) => logColor("brightWhite", message);

module.exports = {
    logBlue,
    logRed,
    logGreen,
    logYellow,
    logMagenta,
    logCyan,
    logWhite,
    logCrimson,
    logGray,
    logBrightRed,
    logBrightGreen,
    logBrightYellow,
    logBrightBlue,
    logBrightMagenta,
    logBrightCyan,
    logBrightWhite,
};