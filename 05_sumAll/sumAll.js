const sumAll = function(int1, int2) {
    let total = 0;
    total += int1;
    if (int1 < 0 || int2 < 0 || typeof int1 !== "number" || typeof int2 !== "number") {
        return "ERROR";
    }
    if (int2 > int1) {
        for (let i = 0; i < (int2 - int1 + 1); i++) {
            total += i + 1;
        }
        total -= 1;
    }
    else if (int1 > int2) {
        for (let i = 0; i < (int1 - int2 ); i++) {
            total += i + 1;
        }
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
