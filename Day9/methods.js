"use strict"

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
// module.exports = { groupById, unique, filterRangeInPlace, filterRange, Calculator }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {Array} arr input array
 * @param {number} a min range
 * @param {number} b max range
 * @returns {Array} range of a and b
 */
function filterRange(arr, a, b) {
    return (arr.filter(item => item >= a && item <= b));
}

/**
 * 
 * @param {Array} arr input array
 * @param {number} a min range
 * @param {number} b max range
 * @returns {Array} range of a and b
 */
function filterRangeInPlace(arr, a, b) {
    let max = arr[0];
    let min = arr[0];

    for (let elm of arr) {
        if (elm < min) {
            min = elm;
        }
        if (elm > max) {
            max = elm;
        }
    }
    if (a < min || b > max) {
        return undefined;
    }
    return (arr.filter(item => item >= a && item <= b));
}

// console.log(filterRangeInPlace([2, 7, 3, 1]));

/**
 * 
 * @returns {number} prduct or sum or diffrence
 */
function Calculator() {
    this.methods = {
        ["-"]: (aaa, bbb) => aaa - bbb,
        ["+"]: (aaa, bbb) => aaa + bbb
    };

    this.calculate = function (str) {
        let char = str.split(" ");
        let aaa = +char[0];
        let operator = char[1];
        let bbb = +char[2];

        if (!this.methods[operator]) {
            return NaN;
        }
        return this.methods[operator](aaa, bbb);
    };

    this.addMethod = function (prop, func) {
        this.methods[prop] = func;

    };
}
/**
 * 
 * @param {Array} array input array
 * @returns {Array} array with a new subset
 */
 function unique(array) {

    let subsetArray = array.filter((item, index, arr) => {
        return arr.indexOf(item) === index;
    });

    return subsetArray;
}

/**
 * 
 * @param {Array} array input an array
 * @returns {Number}reduced number.
 */
 function groupById(array) {

    return array.reduce((user, currentUser) => {
        user[currentUser.id] = currentUser;
        return user;

    }, {});

}