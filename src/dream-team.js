const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members) || members === undefined){
        return false;
    }
  
    return members.filter(x => typeof x === 'string').map(x => x.trim()[0].toUpperCase()).sort().join('')
  // remove line with error and write your code here
};
