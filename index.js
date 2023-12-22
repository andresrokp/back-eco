"use strict";

require("dotenv").config();
const express = require("express");

const {readRegistros,readJoinCruzado,ultimaVistaRec} = require("./db/registrosGateways");


const app = express();
// app.use(express.json());
app.use(express.static("public"));


app.get("/registros/read-all",(rq,rs)=>{
    readRegistros()
        .then((res)=>{
            rs.send(res);
            // console.table(res);
        });
    console.log("sent :: lectura total de registros");
});

app.get("/joins/reg-hyd-rec-bod",(rq,rs)=>{
    readJoinCruzado()
        .then((res)=>{
            rs.send(res);
            // console.table(res);
        });
    console.log("sent :: registros cruzados con nombre");
});

app.get("/joins/ultima-vista",(rq,rs)=>{
    ultimaVistaRec()
        .then((res)=>{
            rs.send(res);
            // console.table(res);
        });
    console.log("sent :: ultima vista de cada tag");
});

app.listen(process.env.PORT || 3000,()=>{
    console.log("Servidor es cuhcando en PORT ",process.env.PORT);
});

