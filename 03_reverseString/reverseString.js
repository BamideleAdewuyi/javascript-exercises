const reverseString = function(string) {
    let length = string.length;
    let output = '';
    for (i = length-1; i >= 0; i--) {
        output += string[i];
    }
    return output.toString();
};

// Do not edit below this line
module.exports = reverseString;
