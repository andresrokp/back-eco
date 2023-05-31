"use strict";

require("dotenv").config();
const express = require("express");
// const path = require("path");

// const readRegistros = require("./db/registrosGateways");


const app = express();
// app.use(express.json());
app.use(express.static("public"));


app.get("/",()=>{
// readRegistros().then((res)=>{rs.send(res);});
// rs.sendFile(__dirname + "/public/index.html");
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

