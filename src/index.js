require("dotenv").config();
const express = require("express");

const readRegistros = require("./db/registrosGateways");


const app = express();
app.use(express.json());


app.get("/",(rq,rs)=>{
    // rs.send("Hello my people");
    readRegistros().then((res)=>{rs.send(res);});
});

app.listen(3000,()=>{
    console.log("está escuchando esta cagá");
});

setInterval(() => {
    console.log("Running en esta mondá...");
}, 2000);
setInterval(() => {
    readRegistros().then((res)=>{console.error(res);});
}, 5000);

