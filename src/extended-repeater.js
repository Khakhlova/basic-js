const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

    str = String(str);
    let {
        repeatTimes = 1,
            separator = '+',
            addition = '',
            additionRepeatTimes = 1,
            additionSeparator = '',
    } = options;

    addition = String(addition);
    separator = separator.toString();


    let result = [];

    for (let i = 0; i < repeatTimes; i++) {
        let newStr = '';
        let addStr = addition;

        for (let j = 0; j < additionRepeatTimes - 1; j++) {
            addStr = addStr + additionSeparator + addition;
        }

        newStr = str + addStr;
        result.push(newStr);
        newStr = '';
    }

    return result.join(separator);

};
