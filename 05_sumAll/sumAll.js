const sumAll = function(num1, num2) {
    let arr = [num1, num2].sort();

    let total = 0;
    for (i = arr[0]; i <= arr[1]; i++) {
        total += i;
    }

    return total;
};

// Do not edit below this line
module.exports = sumAll;
