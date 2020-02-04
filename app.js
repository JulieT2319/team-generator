//node libraries
const fs = require("fs");
const inquirer = require("inquirer");
//app libraries
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

//app templates

//control variables
var needManager = true;
var needEngineer = true;
var needIntern = true;

//employee arrays
const manager = [];
const engineers = [];
const interns = [];

//employee information collection functions
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
        validate: function(value) {
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
    .then(function(data) {
      engineers.push(new Engineer(data.name, data.id, data.email, data.gitHub));
      console.log(engineers);
    });
}

addEngineer();
