const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let myObject = new Object();

    myObject.turns = Math.pow(2, disksNumber) - 1;
    myObject.seconds = Math.floor(myObject.turns / turnsSpeed * 3600);

    return myObject;
};
