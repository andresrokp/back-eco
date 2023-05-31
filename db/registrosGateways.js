const sqlPoolPromise = require("./ddbb");

function readRegistros() {
    return sqlPoolPromise
        .then((pool)=>{
            return pool.request().query("SELECT * FROM contraincendiosh.REGISTROS_GATEWAYS_LOGS ORDER BY ts DESC");
        }).then((res)=>{
            return res.recordset;
        }).catch((error)=>{
            return error;
        });
}

function readJoinCruzado() {
    return sqlPoolPromise
        .then((pool)=>{
            return pool.request().query(`SELECT
            RGL.ts,
            B.NombreBodega,
            R.NombreRecurso,
            TH.RecursoID,
            R.EstadoTeorico,
            R.ActividadAplicacion,
            RGL.TagID
        FROM
            contraincendiosh.REGISTROS_GATEWAYS_LOGS RGL
            LEFT JOIN contraincendiosh.TAGS_HYDRATION TH ON RGL.TagID = TH.TagID
            LEFT JOIN contraincendiosh.RECURSOS R ON R.RecursoID = TH.RecursoID
            LEFT JOIN contraincendiosh.BODEGAS B ON RGL.BodegaID = B.BodegaID
        ORDER BY ts DESC`);
        }).then((res)=>{
            return res.recordset;
        }).catch((error)=>{
            return error;
        });
}

module.exports = {
    readRegistros,
    readJoinCruzado
};