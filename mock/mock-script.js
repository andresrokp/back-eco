const dataArray = require("./data.json");

let index = 0;
let isRising = false;


function getElementSpecific(index) {
    
    try {
        return value = dataArray[index];
    } catch (error) {
        return 400;
    }

}

function getElementAutomatic() {
    
    console.log('index out',index);
    const value = dataArray[index];
    // if reaches endpoints, invert iteration course
    if ( (index == 0) || (index == dataArray.length - 1) ) isRising = !isRising;
    // depending on direction, add or less
    isRising ? index++ : index--;
    
    return value
}


module.exports = {
    getElementSpecific,
    getElementAutomatic
}

// -------  QUICK TEST

(async ()=>{
    for (let i of dataArray.concat(dataArray)) {
        const element = getElementAutomatic();
        console.log(element.index);
    }
})()