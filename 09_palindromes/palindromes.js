const palindromes = function (str) {
    str = str.replace(/\W|_/g, '');
    str = str.toUpperCase();
    let newStr = "";
    let x = str.length;
    for (let i = x-1; i >= 0 ; i--) {
        newStr += str[i];
    }
    console.log(str)
    console.log(newStr)
    if (newStr === str) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
