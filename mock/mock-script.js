const dataArray = require("./data.json");

let index = 0;
let isRising = false;

function getElement() {
    
    console.log('index out',index);
    const value = dataArray[index];
    // if reaches endpoints, invert iteration course
    if ( (index == 0) || (index == dataArray.length - 1) ) isRising = !isRising;
    // depending on direction, add or less
    isRising ? index++ : index--;
    
    return value
}


module.exports = getElement;

// -------  QUICK TEST

(async ()=>{
    for (let i of dataArray.concat(dataArray)) {
        const element = getElement();
        console.log(element.index);
    }
})()