const dataArray = require("./data.json");

let index = 0;


function getElement() {
    const value = dataArray[index];
    index++;
    return value
}

const element = getElement();
console.log(element);

module.exports = getElement;
