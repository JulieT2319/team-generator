//node libraries
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");

//fs functions promisify
const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);

//app libraries
//classes
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
//html generation
const html = require("./templates/generateHTML");

//control variables
let needManager = true;
let needEngineer = true;
let needIntern = true;

let project;
//employee arrays
const manager = [];
const engineers = [];
const interns = [];
const ids = [];

//add employee functions
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
					if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/.test(value)) {
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
			ids.push(data.id);
			console.log(manager);
			needManager = false;
			manager.forEach(element => {
				appendFileAsync("./output/team.html", html.managerHTML(element));
			});
			addEngineer();
		});
}

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
					if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/.test(value)) {
						return true;
					} else {
						return "Please provide a valid email address.";
					}
				}
			},
			{
				type: "input",
				message: "What is the engineer's ID?",
				name: "id",
				validate: function (value) {
					if (ids.indexOf(value) === -1) {
						return true
					} else {
						return "That id number has already been assigned, please assign a unique ID number."
					}
				}
			},
			{
				type: "input",
				name: "gitHub",
				message: "What is the engineer's github username?"
			},
			{
				type: "list",
				name: "add",
				message: "Do you want to add another engineer to your team?",
				choices: ["Yes", "No"]

			}
		])
		.then(function (data) {
			engineers.push(new Engineer(data.name, data.id, data.email, data.gitHub));
			ids.push(data.id);
			console.log(engineers);
			if (data.add === "No") {
				needEngineer = false;
				engineers.forEach(element => {
					appendFileAsync("./output/team.html", html.engineerHTML(element));
				});
				addIntern()
			} else {
				addEngineer();
			}
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
					if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/.test(value)) {
						return true;
					} else {
						return "Please provide a valid email address.";
					}
				}
			},
			{
				type: "input",
				message: "What is the intern's ID?",
				name: "id",
				validate: function (value) {
					if (ids.indexOf(value) === -1) {
						return true
					} else {
						return "That id number has already been assigned, please assign a unique ID number."
					}
				}
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
			ids.push(data.id);
			console.log(interns);
			if (data.add === "No") {
				needIntern = false;
				interns.forEach(element => {
					appendFileAsync("./output/team.html", html.internHTML(element));

				});
				appendFileAsync("./output/team.html", html.pageEndHTML());
			} else {
				addIntern();
			}
		});
}
function projectName() {
	inquirer
		.prompt([
			{
				name: "project",
				message: "What project are you creating a team for?",
				type: "input"
			}
		]).then(function (data) {
			project = data.project;
			writeFileAsync("./output/team.html", html.pageTopHTML(project));
			addManager()
		});

};

async function collectInfo() {
	projectName();

}
collectInfo();
