"use strict";
const isDivBy3 = (num) => {
    if (num % 3 === 0)
        return true;
    return false;
};
const isDivBy5 = (num) => {
    if (num % 5 === 0)
        return true;
    return false;
};
const fizzbuzz = (num) => {
    if (isDivBy3(num) && isDivBy5(num))
        return "fizzbuzz";
    if (isDivBy3(num))
        return "fizz";
    if (isDivBy5(num))
        return "buzz";
    return "None";
};
console.log(fizzbuzz(3));
console.log(fizzbuzz(5));
console.log(fizzbuzz(15));
console.log(fizzbuzz(1));
