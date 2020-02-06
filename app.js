//node libraries
const fs = require("fs");
const inquirer = require("inquirer");
//app libraries
//classes
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

//app templates

//control variables
let needManager = true;
let needEngineer = true;
let needIntern = true;

let project;
//employee arrays
const manager = [];
const engineers = [];
const interns = [];

//add employee functions
function addEngineer() {
	inquirer
		.prompt([
			{
				type: "input",
				name: "name",
				message: "What is the engineer's name?"
			},
			{
				type: "input",
				name: "email",
				message: "What is the engineer's email address?",
				validate: function (value) {
					if (value.includes("@") && value.includes(".")) {
						return true;
					} else {
						return "Please provide a valid email address.";
					}
				}
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
			}
		])
		.then(function (data) {
			engineers.push(new Engineer(data.name, data.id, data.email, data.gitHub));
			console.log(engineers);
		});
}

function addManager() {
	inquirer
		.prompt([
			{
				type: "input",
				name: "name",
				message: "What is the manager's name?"
			},
			{
				type: "input",
				name: "email",
				message: "What is the manager's email address?",
				validate: function (value) {
					if (value.includes("@") && value.includes(".")) {
						return true;
					} else {
						return "Please provide a valid email address.";
					}
				}
			},
			{
				type: "input",
				message: "What is the manager's ID?",
				name: "id"
			},
			{
				type: "input",
				name: "office",
				message: "What is the manager's office number?"
			}
		])
		.then(function (data) {
			manager.push(new Manager(data.name, data.id, data.email, data.office));
			console.log(manager);
		});
}

function addIntern() {
	inquirer
		.prompt([
			{
				type: "input",
				name: "name",
				message: "What is the intern's name?"
			},
			{
				type: "input",
				name: "email",
				message: "What is the intern's email address?",
				validate: function (value) {
					if (value.includes("@") && value.includes(".")) {
						return true;
					} else {
						return "Please provide a valid email address.";
					}
				}
			},
			{
				type: "input",
				message: "What is the intern's ID?",
				name: "id"
			},
			{
				type: "input",
				name: "school",
				message: "What is the intern's school?"
			},
			{
				type: "list",
				name: "add",
				message: "Do you want to add another intern to your team?",
				choices: ["Yes", "No"]

			}
		])
		.then(function (data) {
			interns.push(new Intern(data.name, data.id, data.email, data.school));
			console.log(interns);
			if (data.add === "No") {
				needIntern = false;
			} else {
				addIntern();
			}
		});
}
function projectName() {
	let { project } = inquirer
		.prompt([
			{
				name: "project",
				message: "What project are you creating a team for?",
				type: "input"
			}
		])

	console.log(project)
};

//projectName();

async function collectInfo() {
	addManager();
}
collectInfo();