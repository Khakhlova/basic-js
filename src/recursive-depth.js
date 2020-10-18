const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
      let result;
      
    if (Array.isArray(arr)){
        result = 1 + arr.reduce((acc, i) => Math.max(this.calculateDepth(i),acc),0);
    }else{
        result = 0;
    }
    
      return  result;
  }
};