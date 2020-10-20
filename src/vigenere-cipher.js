const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    
    constructor(order) {
        this.order = order;
        this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
    };


    encrypt(message, key) {
        if (message === undefined || key === undefined) {
            throw new Error();
        };

        let result = [];
        let messageCase = message.toUpperCase();
        let keyCase = key.toUpperCase();
        let keyIndex = 0;
        for (let i = 0; i < messageCase.length; i++) {
            if (!messageCase[i].match(/[A-Z]/)) {
                result.push(messageCase[i]);
            } else {
                let sum = this.alphabet.indexOf(messageCase[i]) + this.alphabet.indexOf(keyCase[(keyIndex % (keyCase.length))]);
                if (sum > (this.alphabet.length - 1)) {
                    result.push(this.alphabet[sum % (this.alphabet.length)]);
                } else {
                    result.push(this.alphabet[sum]);
                }
                keyIndex++;
            }
        };
        
        if (this.order === true || this.order === undefined) {
            return result.join('');
        } else {
            return result.reverse().join('');
        };
    };
    
    
    decrypt(encryptedMessage, key) {
        if (encryptedMessage === undefined || key === undefined) {
            throw new Error();
        };

        let result = [];
        let encryptedMessageCase = encryptedMessage.toUpperCase();
        let keyCase = key.toUpperCase();
        let keyIndex = 0;

        for (let i = 0; i < encryptedMessageCase.length; i++) {
            if (!encryptedMessageCase[i].match(/[A-Z]/)) {
                result.push(encryptedMessageCase[i])
            } else {
                let sum = this.alphabet.indexOf(encryptedMessageCase[i]) + this.alphabet.length - this.alphabet.indexOf(keyCase[keyIndex % (keyCase.length)]);
                if (sum > (this.alphabet.length - 1)) {
                    result.push(this.alphabet[sum % (this.alphabet.length)]);
                } else {
                    result.push(this.alphabet[sum]);
                }
                keyIndex++;
            };
        };
        
        if (this.order === true || this.order === undefined) {
            return result.join('');
        } else {
            return result.reverse().join('');
        };
    };
};


module.exports = VigenereCipheringMachine;
