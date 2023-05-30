require("dotenv").config();
const readRegistros = require("./db/registrosGateways");

setInterval(() => {
    console.log("Running en esta mondá...");
}, 2000);

setInterval(() => {
    readRegistros();
}, 5000);

