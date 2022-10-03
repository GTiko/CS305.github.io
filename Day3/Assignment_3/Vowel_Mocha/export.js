"use strict";
module.exports = {isVowel};

/**
 * 
 * @param {Parameter} letter parametr pass by the user
 * @returns {boolean} either true or false
 */
function isVowel(letter){
    if(letter == "a" ||letter == "e" ||
       letter == "i" ||letter == "o" ||
       letter == "u"){
            return true;
        }else{
            return false;
        }
}

