//This code is to find the remaining days, weeks and months and years left for a person with any age to attain the age of 90.
function lifeInWeeks(age) {
    //The amount of time that would be passed if he/she is 90 years old
    var day90 = 365 * 90;
    var week90 = 52 * 90;
    var month90 = 12 * 90;
    var year90 = 90;
    
    //The amount of time that would be passed if he/she is the given years old
    var ageDay = 365 * age;
    var ageWeek = 52 * age;
    var ageMonth = 12 * age;
    
    var remDay = day90 - ageDay;
    var remWeek = week90 - ageWeek;
    var remMonth = month90 - ageMonth;
    var remYear = year90 - age;
    
    console.log("You have " + remDay + " days, " + remWeek + " weeks, " + remMonth + " months, and " + remYear + " years left!");
}

lifeInWeeks(56);
