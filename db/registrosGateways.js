const sqlPoolPromise = require("./ddbb");

function readRegistros() {
    return sqlPoolPromise
        .then((pool)=>{
            return pool.request().query("SELECT * FROM contraincendiosh.REGISTROS");
        }).then((res)=>{
            return res.recordset;
        }).catch((error)=>{
            return error;
        });
}

module.exports = readRegistros;