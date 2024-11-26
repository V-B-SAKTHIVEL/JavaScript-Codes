const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay');

console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob')); // -1

console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));

if(friends.includes('Steven')){
    console.log('You have a friend called Steven');  
}
