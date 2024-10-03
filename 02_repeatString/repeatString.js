const repeatString = function(string, num) {
    let toReturn = "";
    for (i = 1; i <= num; i++) {
        toReturn+= string;
    }
    return toReturn;
};

// Do not edit below this line
module.exports = repeatString;
