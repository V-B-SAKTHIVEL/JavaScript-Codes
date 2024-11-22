//This program is to understand how the strict mode works in JS

//Code without strict mode
/*
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log('I can drive :)');   //Output is empty and unable to find the error
*/

//With Strict Mode
'use strict'; //to enable strict mode
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log('I can drive :)'); //results where the mistake is
