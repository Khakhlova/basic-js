/*const CustomError = require("../extensions/custom-error");*/

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    
  if (typeof sampleActivity === "string" && /^([1-9]|1[0-5])$/.test(sampleActivity) === true){
      var a = Number(sampleActivity);
      return Math.ceil(Math.log(a/MODERN_ACTIVITY) / (Math.log(2) / HALF_LIFE_PERIOD));
  }
    return false;
}
