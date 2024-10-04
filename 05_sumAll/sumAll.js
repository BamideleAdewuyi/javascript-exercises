const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }
    if (Number.isInteger(num1) && Number.isInteger(num2)) {
        let arr = [num1, num2].sort();

        let total = 0;
        for (i = arr[0]; i <= arr[1]; i++) {
            total += i;
        }

        return total;
    }
    else {
        return "ERROR";
    }
    
};

// Do not edit below this line
module.exports = sumAll;
