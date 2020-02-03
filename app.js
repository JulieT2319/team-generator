const fs = require("fs");
const inquirer = require("inquirer");

function addEngineer{
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
	}])
} 