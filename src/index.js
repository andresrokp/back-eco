require("dotenv").config();

setInterval(() => {
    console.log("Running en esta mondá...");
    console.log("Test ENV >> ", typeof process.env.TEST);
}, 1000);

