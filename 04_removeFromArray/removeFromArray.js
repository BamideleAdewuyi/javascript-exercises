const removeFromArray = function() {
    let arr = arguments[0];
    let removals = [];
    for (i = 1; i < arguments.length; i++) {
        removals.push(arguments[i]);
    }
    
    for (j = arr.length; j >= 0; j--) {
        for (const num of removals) {
            if (arr[j] === num) {
                arr.splice(j, 1);
            }
        }
    }
    
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
