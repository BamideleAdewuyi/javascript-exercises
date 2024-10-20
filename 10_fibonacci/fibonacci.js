const fibonacci = function(num) {
    const a = Number(num);
    if (a === 0) {
        return 0;
    }
    if (a < 0) {
        return "OOPS";
    }
    let arr = [1, 1];
    for (i = 1; i < a; i++) {
        arr.push(arr[i] + arr[i-1]);
    }
    return arr[a - 1];
};

// Do not edit below this line
module.exports = fibonacci;
