const sumAll = function (a, b) {

    if (typeof a === "string" || typeof b === "string") {
        return "ERROR";
    }
    let sum = 0
    if (a > b) {
        for (i = b; i <= a; i++) {
            sum += i;
        }
    }
    else if (b >= a) {
        for (i = a; i <= b; i++) {
            sum += i;
        }
    }

    if ((typeof sum === "number" || typeof sum === "bigint") && sum > 0) {
        return sum;
    }
    else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
