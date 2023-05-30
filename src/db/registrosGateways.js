const sqlPoolPromise = require("./ddbb");

function readRegistros() {
    sqlPoolPromise
        .then((pool)=>{
            return pool.request().query("SELECT * FROM contraincendiosh.REGISTROS");
        }).then((res)=>{
            console.table(res.recordset);
        }).catch((error)=>{
            console.log(error);
        });
}

module.exports = readRegistros;