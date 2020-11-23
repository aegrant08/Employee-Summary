// Variable
const Employee = require("./Employee");

// Engineer class and inherits from Employee
class Engineer extends Employee {
    constructor(name, id, email, github, years) {
        super(name, id, email)
        this.github = github;
        this.years = years;
    }
    getGithub() {
        return this.github;
    }
    getYears() {
        return this.years;
    }
    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer;
