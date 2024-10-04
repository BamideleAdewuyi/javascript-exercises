const leapYears = function(year) {
    switch(year) {
        case (year % 100 === 0 && year % 4 != 0):
            return false;
        case (year % 0 != 0):
            return false;
        default:
            return true;
    }
};

// Do not edit below this line
module.exports = leapYears;
