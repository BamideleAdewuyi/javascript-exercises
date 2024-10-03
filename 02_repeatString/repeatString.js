const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }
    else {
        let toReturn = "";
        for (i = 1; i <= num; i++) {
            toReturn+= string;
        }
        return toReturn;
    }
};

// Do not edit below this line
module.exports = repeatString;
