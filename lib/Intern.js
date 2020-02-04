const Employeee = require("./Employee");

class Intern extends Employeee {
	constructor(name, id, email, school) {
		super(name, id, email);
		this.school = school;
		this.role = "Intern"
	}
	getSchool() {
		return this.school;
	}
}

module.exports = Intern;