const findTheOldest = function(obj) {
    let currentYear = 0;
    let currentPerson = 0;
    for (let i = 0; i < obj.length; i++) {
        year = 0;
        let date =  new Date().getFullYear();
        if (!obj[i].yearOfDeath) {
            year = date - obj[i].yearOfBirth; 
        }
        else {
            year = obj[i].yearOfDeath - obj[i].yearOfBirth;
        }
        if (year > currentYear) {
            currentYear = year;
            currentPerson = i;
        }
    }
    let per = obj[currentPerson];
    return per;
};

// Do not edit below this line
module.exports = findTheOldest;
