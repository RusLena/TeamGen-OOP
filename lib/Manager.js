// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
/*`Manager` will also have the following:
      * `officeNumber`
      * `getRole()`&mdash;overridden to return `'Manager'`*/
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
      super(name, id, email);
      this.officeNumber = officeNumber; // Changed from this.office to this.officeNumber
    }
    getOfficeNumber() {
        return this.officeNumber; // Changed from this.office to this.officeNumber
      }
    // Override to return 'Manager'
    getRole() {
      return 'Manager';
    }
  }
  
  module.exports = Manager;
    