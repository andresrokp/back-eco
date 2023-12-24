const fs = require("fs");
const csv = require("csv-parser");

// FILE READING -----
const dataArray = [];
async function loadCsvData(){
    await new Promise((resolve, reject) => {
        fs.createReadStream("./mock/data.csv")
        .pipe(csv()) // Consider headers row
        .on("data", (row) => {
            dataArray.push(row)
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
    if (dataArray.length == 0) await loadCsvData();
    return dataArray;
}

let index = 0;
let isRising = false;

function getElementSpecific(index) {
    
    try {
        return dataArray[index];
    } catch (error) {
        return 400;
    }

}

function getElementAutomatic() {
    
    // console.log("index out",index);
    const value = dataArray[index];
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