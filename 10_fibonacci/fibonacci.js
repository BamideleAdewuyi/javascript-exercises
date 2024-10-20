const fibonacci = function(num) {
    if (num === 0) {
        return 0;
    }
    if (num < 0) {
        return "OOPS";
    }
    let arr = [1, 1];
    for (i = 1; i < num; i++) {
        arr.push(arr[i] + arr[i-1]);
    }
    return arr[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
