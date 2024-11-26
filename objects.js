const sakthi = {
    firstName : 'Sakthi',
    lastName : 'Vel',
    age : 2037 - 1991,
    job : 'Coder',
    friends : ['Michael', 'Peter', 'Steve']
};

console.log(sakthi);
console.log(sakthi.lastName);

const nameKey = 'Name';
console.log(sakthi['first' + nameKey]);
console.log(sakthi['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Sakthi? Choose between firstName, lastName, age, job and friends.');

if(sakthi[interestedIn]){
    console.log(sakthi[interestedIn]);
} else {
    console.log('Wrong request');
}

sakthi.location = 'Chennai';
sakthi['instagram'] = '@joshSakthi';
console.log(sakthi);

console.log(`${sakthi.firstName} has ${sakthi.friends.length} friends and his best friend is called ${sakthi.friends[0]}`);
