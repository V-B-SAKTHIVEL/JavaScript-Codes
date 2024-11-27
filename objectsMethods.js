const sakthi = {
    firstName : 'Sakthi',
    lastName : 'Vel',
    birthYear : 1990,
    job : 'Coder',
    friends : ['Michael', 'Peter', 'Steve'],
    hasDriversLicense : true,

    // calcAge : function (birthYear) {
    //     return 2037 - birthYear;
    // }

    calcAge : function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary : function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
    }
};
console.log(sakthi.calcAge());
console.log(sakthi.getSummary());
