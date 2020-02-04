//node library dependencies
const fs = require("fs");
const inquirer = require("inquirer");
//app library dependencies
const Engineer = require("./Develop/lib/Engineer");
const Manager = require("./Develop/lib/Manager");
const Intern = require("./Develop/lib/Intern");

//employee arrays
const manager = [];
const engineers = [];
const interns = [];

//employee information collection functions
function addEngineer() {
	inquirer.prompt([{
		type: "input",
		name: "name",
		message: "What is the engineer's name?"
	},
	{
		type: "input",
		name: "email",
		message: "What is the engineer's email address?"
	},
	{
		type: "input",
		message: "What is the engineer's ID?",
		name: "id"
	},
	{
		type: "input",
		name: "gitHub",
		message: "What is the engineer's github username?"
	}]).then(function (data) {
		engineers.push(new Engineer(data.name, data.id, data.email, data.gitHub))
		console.log(engineers);
	})
}

addEngineer();