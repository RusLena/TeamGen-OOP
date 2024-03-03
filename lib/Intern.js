// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
/*/*Intern` will also have the following:
      * `school`
      * `getSchool()`
      * `getRole()`&mdash;overridden to return `'Intern'`*/
const Employee = require("./Employee"); 
class Intern extends Employee {
    constructor(name, id, email, school) {
      super(name, id, email);
      this.school = school;
    }
    getSchool() {
        return this.school;
      }
    // Override to return 'Intern'
    getRole() {
      return 'Intern';
    }
  }
  
  module.exports = Intern;
  