const CustomError = require("../extensions/custom-error");

const chainMaker = {
    array: [],
    getLength() {
        return this.array.length;

    },
    addLink(value) {
        this.array.push(value);
        return this;


    },
    removeLink(position) {
        if (position > this.array.length - 1 || typeof (position) != 'number') {
            this.array = [];
            throw new Error;
        } else {
            this.array.splice(position - 1, 1);
            return this;
        }

    },
    reverseChain() {
        this.array.reverse();
        return this;
    },
    finishChain() {
        for (let i = 0; i < this.array.length; i++) {
            this.array[i] = `( ${this.array[i]} )`;
        };
        let strChain = this.array.join('~~');
        this.array = [];
        return strChain;

    }
};

module.exports = chainMaker;
