const sql = require("mssql");

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    server: process.env.DB_SERVER,
    database: process.env.DB_NAME
};

const sqlPoolPromise = new sql.ConnectionPool(config)
    .connect()
    .then((pool)=>{
        console.log("Conectado a esa verga");
        return pool;
    })
    .catch((error)=>{
        console.error(error);
    });

module.exports = sqlPoolPromise;