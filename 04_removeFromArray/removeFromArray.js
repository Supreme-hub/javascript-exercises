const removeFromArray = function(a ,...args) {
    for (let i = 0; i < args.length; i++) {
        let x = a.indexOf(args[i]);
        if (x !== -1) {
            a.splice(x, 1);
        }
    }
    return a;
};

// Do not edit below this line
module.exports = removeFromArray;
