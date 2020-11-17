// Variable
const Employee = require("./Employee");

// Manager class and inherits from Employee class
class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email)
        this.officeNumber = office;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getPosition() {
        return "Manager"
    }
}

module.exports = Manager;


