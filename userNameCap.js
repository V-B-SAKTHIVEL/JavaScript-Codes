//This JS Code gets the username as input, capitalize the first letter, and displays a message with that name. 
var userName = prompt("What's ur Name: ");
var firstChar = userName.slice(0,1);
var firstUpperChar = firstChar.toUpperCase();
var nextChars = userName.slice(1,userName.length).toLowerCase();
var capUserName = firstUpperChar + nextChars;
alert(`Hello ${capUserName}! Glad to meet you!`);
