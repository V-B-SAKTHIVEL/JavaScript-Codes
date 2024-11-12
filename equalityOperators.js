const age = '18';
if(age === 18){
    console.log("You just became an adult (strict)");    
}

if (age == 18){
    console.log("You just became and adult (Loose)");
}

const favourite = Number(prompt("What's your favourite Number? "));
console.log(favourite);
console.log(typeof favourite);

if(favourite === 23){
    console.log(`${favourite} is amazing number!`);
} else if(favourite === 7){
    console.log(`${favourite} is also a cool number!`);
} else {
    console.log(`Number is not 23 or 7`);
}

if(favourite !== 23){
    console.log('Why not 23?');
}
