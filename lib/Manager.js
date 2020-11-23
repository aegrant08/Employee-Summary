// Variable
const Employee = require("./Employee");

// Manager class and inherits from Employee class
class Manager extends Employee {
    constructor(name, id, email, office, years) {
        super(name, id, email)
        this.officeNumber = office;
        this.years = years;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getYears() {
        return this.years;
    }
    getRole() {
        return "Manager"
    }
}

module.exports = Manager;


