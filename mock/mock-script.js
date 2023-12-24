const fs = require("fs");
const csv = require("csv-parser");

// FILE READING -----

// json
const dataArrayJson = require("./data.json");
// csv
const dataArrayCsv = [];
async function loadCsvData(){
    await new Promise((resolve, reject) => {
        fs.createReadStream("./mock/data.csv")
        .pipe(csv({ headers: true })) // Consider headers row
        .on("data", (row) => {
            dataArrayCsv.push(row)
        })
        .on("end", () => {
            resolve()
        })
        .on("error", (error) => {
            reject(error);
        });
    })
};

async function getCsvData() {
    if (dataArrayCsv.length == 0) await loadCsvData();
    return dataArrayCsv;
}



let index = 0;
let isRising = false;

function getElementSpecific(index) {
    
    try {
        return dataArrayJson[index];
    } catch (error) {
        return 400;
    }

}

function getElementAutomatic() {
    
    // console.log("index out",index);
    const value = dataArrayJson[index];
    // if reaches endpoints, invert iteration course
    if ( (index == 0) || (index == dataArrayJson.length - 1) ) isRising = !isRising;
    // depending on direction, add or less
    isRising ? index++ : index--;
    
    return value
}




module.exports = {
    getElementSpecific,
    getElementAutomatic,
    getCsvData
};

// -------  QUICK TEST

// for (let i of dataArrayJson.concat(dataArrayJson)) {
//     getElementAutomatic();
//     i;
// }

(async ()=>{
    console.log(await getCsvData());
})()