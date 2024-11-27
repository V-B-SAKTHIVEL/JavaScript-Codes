const sakthi = [
    'Sakthi',
    'Vel',
    2037 - 1991,
    'Coder',
    ['Michael', 'Peter', 'Steve'],
    true
];

const types = [];
for(let i = 0; i < sakthi.length; i++){
    console.log(sakthi[i], typeof sakthi[i]);

    //types[i] = typeof sakthi[i];
    types.push(typeof sakthi[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for(let i = 0; i < years.length; i++){
    ages.push(2037 - years[i]);
}
console.log(ages);

console.log('-----ONLY STRINGS-----');
for(let i = 0; i < sakthi.length; i++){
    if(typeof sakthi[i] === 'number') break;

    console.log(sakthi[i], typeof sakthi[i]);
}
