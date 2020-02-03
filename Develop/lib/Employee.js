class Employee {
	constructor(name, id, email, title) {
		this.name = name;
		this.id = id;
		this.email = email;
		this.title = title;
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