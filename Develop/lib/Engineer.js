const Employee = require("./Employee");

class Engineer extends Employee {
	constructor(name, id, email, github, title) {
		super(name, id, email, title);
		this.github = github;
		this.role = "Engineer"
	}
	getGithub() {
		return this.github;
	}

}

module.exports = Engineer;