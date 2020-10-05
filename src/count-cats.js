/*const CustomError = require("../extensions/custom-error");*/

module.exports = function countCats(backyard/* matrix */) {
    let arr = [].concat(...backyard);
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i] === '^^'){
            sum++;
        }else{
            sum = sum + 0;
        }
    }
    return sum;
 /* throw new CustomError('Not implemented');*/
  // remove line with error and write your code here
};
