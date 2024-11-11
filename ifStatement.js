const age = 15;
const isOldEnough = age >= 18;

if(isOldEnough){
    console.log("Sakthi is eligible to get driving license 🚘");
} else {
    const yearsLeft = 18 - age;
    console.log(`Sakthi is too young. Wait another ${yearsLeft} years :)`);
}

let birthYear = 2001;
let century;

if(birthYear <= 2000){
    century = 20;
} else {
    century = 21;
}

console.log(century);
