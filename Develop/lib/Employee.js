class Employee {
	constructor(name, id, title)
	printInfo() {
		for (var key in this) {
			console.log(`${key}: ${this[key]}`);
		}
	}
}