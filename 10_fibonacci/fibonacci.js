const fibonacci = function(x) {
    if (x < 0) {
        return "OOPS"
    }
    let array = [];
    for (let i = 0; i < x; i++) {
        n = 0;
        if (i === 0 || i === 1) {
            n = 1;
        }
        else {
            n =array[i-1] + array [i-2];
        }
        array.push(n);
    }
    return (array[array.length-1]);
};

// Do not edit below this line
module.exports = fibonacci;
