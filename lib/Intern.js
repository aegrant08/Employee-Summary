// Variable
const Employee = require("./Employee");

// Intern class and inherits from Employee
class Intern extends Employee {
    constructor(name, id, email, school, degree) {
        super(name, id, email);
        this.school = school;
        this.degree = degree;
    }
    getSchool() {
        return this.school;
    }
    getDegree() {
        return this.degree;
    }
    getRole() {
        return "Intern"
    }
}

module.exports = Intern;
