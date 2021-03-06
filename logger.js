var bunyan = require('bunyan');
var path = require("path");

let log = bunyan.createLogger({
    name: "npn_geo_services",
    streams: [
        {
            level: "info",
            path: path.join("./logs", "info.log")
        },
        {
            level: "error",
            path: path.join("./logs", "error.log")
        }
    ]
});

module.exports = log;