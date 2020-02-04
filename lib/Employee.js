class Employee {
	constructor(name, id, email) {
		this.name = name;
		this.id = id;
		this.email = email;
		this.role = "Employee";
	};

	getName() {
		return this.name;
	}
	getId() {
		return this.id;
	}
	getEmail() {
		return this.email;
	}
	getRole() {
		return this.role;
	}
	printInfo() {
		for (var key in this) {
			console.log(`${key}: ${this[key]}`);
		}
	}
}

module.exports = Employee;