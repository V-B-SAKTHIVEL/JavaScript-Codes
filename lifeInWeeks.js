//This code is to find the remaining days, weeks and months and years left for a person with any age to attain the age of 90.
function lifeInWeeks(age) {
    //The amount of time that would be passed if he/she is 90 years old
    var remYear = 90 - age;
    var remDay = remYear * 365;
    var remWeek = remYear * 52;
    var remMonth = remYear * 12;
    
    console.log("You have " + remDay + " days, " + remWeek + " weeks, " + remMonth + " months, and " + remYear + " years left!");
}

lifeInWeeks(56);
