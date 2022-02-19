const reverseString = function(str) {
    let newStr = "";
    let x = str.length;
    for (let i = x-1; i >= 0 ; i--) {
        newStr += str[i];
    }
    return newStr;
};

let out = reverseString("hello");
console.log(out)
// Do not edit below this line
module.exports = reverseString;
