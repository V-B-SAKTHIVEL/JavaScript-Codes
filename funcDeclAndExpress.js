function calcAge1(birthYear){
    return 2037 - birthYear;
}

const age1 = calcAge1(1990);
console.log(age1);

//Function Expression => creating anonymous function
const calcage2 = function (birthYear){
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age1, age2);
