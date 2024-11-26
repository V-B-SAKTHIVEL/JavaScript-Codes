const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2000, 2020);
console.log(years);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Sakthi'
const Sakthi = [firstName, 'Vel', 2037 - 1991, 'Coder', friends];
console.log(Sakthi);
console.log(Sakthi.length);

const calcAge = function (birthYear){
    return 2037 - birthYear;
}

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
