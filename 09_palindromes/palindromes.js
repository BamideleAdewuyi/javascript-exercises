const palindromes = function (str) {
    const punctuationless = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g,"");
    let arr = punctuationless.split("");
    if  (arr == arr.reverse()) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
