let db = require('./database.js');
let log = require('../../logger.js');
const moment = require('moment');
let helpers = require('./general');
var fs = require('fs');
const https = require('https');
const { exec } = require('child_process');

let node_ssh = require('node-ssh');
let ssh = new node_ssh();
let client = require('scp2');


async function getClimatePointTimeSeries(climateProvider, climateVariable, startDate, endDate,lat, long) {
    
    let response = {
        "climateProvider": climateProvider,
        "climateVariable": climateVariable,
        "startDate": startDate.format('YYYY-MM-DD'),
        "endDate": endDate.format('YYYY-MM-DD'),
        "latitude": lat,
        "longitude": long
    };
    
    if(climateProvider === "PRISM" && climateVariable == "precip") {
        const query = {
            text: `SELECT rast_date, st_value(rast,ST_SetSRID(ST_Point($1, $2),4269)) FROM prism_ppt_data
                    WHERE rast_date >= $3
                    AND rast_date <= $4
                    AND ST_Intersects(rast, ST_SetSRID(ST_MakePoint($5, $6),4269))
                    ORDER BY rast_date`,
            values: [long, lat, startDate.format('YYYY-MM-DD'), endDate.format('YYYY-MM-DD'), long, lat]
        };
        console.log(query);
        const res = await db.pgPool.query(query);

        let timeSeries = res['rows'].map(row => {
            return {
                "date": row['rast_date'].toISOString().split("T")[0],
                "precip (mm)": row['st_value']
            }
        });

        response["timeSeries"] = timeSeries;
        return response;
    } else if(climateProvider === "NCEP" && (climateVariable == "tmin" || climateVariable == "tmax")) {
        const query = {
            //todo generalize year
            text: `SELECT rast_date, dataset, st_value(rast,ST_SetSRID(ST_Point($1, $2),4269)) FROM ${climateVariable}_2018
                    WHERE rast_date >= $3
                    AND rast_date <= $4
                    AND ST_Intersects(rast, ST_SetSRID(ST_MakePoint($5, $6),4269))
                    ORDER BY rast_date`,
            values: [long, lat, startDate.format('YYYY-MM-DD'), endDate.format('YYYY-MM-DD'), long, lat]
        };
        console.log(query);
        const res = await db.pgPool.query(query);

        let timeSeries = res['rows'].map(row => {
            return { 
                "date": row['rast_date'].toISOString().split("T")[0], 
                climateVariable: row['st_value'],
                "dataset": row['dataset']
            }
        });

        response["timeSeries"] = timeSeries;
        return response;
    }

    response["timeSeries"] = "no data";
    return response;
    
}

module.exports.getClimatePointTimeSeries = getClimatePointTimeSeries;
