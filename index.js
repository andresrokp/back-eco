"use strict";

require("dotenv").config();
const express = require("express");

const readRegistros = require("./db/registrosGateways");


const app = express();
// app.use(express.json());
app.use(express.static("public"));


app.get("/registros/read-all",(rq,rs)=>{
    readRegistros()
        .then((res)=>{
            rs.send(res);
            console.log(res);
        });
    console.log("mandé esa mierda");
});

app.listen(3000,()=>{
    console.log("está escuchando esta cagá");
});

setInterval(() => {
    console.log("Running en esta mondá...");
}, 2000);
// setInterval(() => {
//     readRegistros().then((res)=>{console.error(res);});
// }, 5000);

