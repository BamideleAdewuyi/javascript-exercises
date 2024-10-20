const palindromes = function (str) {
    const punctuationless = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g,"").toLowerCase();
    let arr = punctuationless.split("");
    arr.reverse();
    const strReverse = arr.join("");
    if  (punctuationless == strReverse) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
