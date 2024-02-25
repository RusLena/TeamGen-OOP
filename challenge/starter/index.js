const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Employees list
const teamMembers = [];

// add a manager to the team
function init() {
    addManager();
}
// questions about managers
function addManager() {
    inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is the manager's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the manager's ID?"
      },

      {
        type: 'input',
        name: 'email',
        message: "What is the manager's email?"
      },

      {
        type: 'input',
        name: 'officeNumber',
        message: "What is the manager's office number?"
      }

]).then(answers => {
    //create a new Manager object with answers
    const manager = new Manager(answers.name, answers, answers.email, answers.id, answers.officeNumber);
    // add the new manager to the team
    teamMembers.push(manager);
    //continue to adding an engineer
    addEngineer();
});
}

function addEngineer() {
inquirer.prompt([
{
  type: 'input',
  name: 'name',
  message: "What is the engineer's name?"
},
{
  type: 'input',
  name: 'id',
  message: "What is the engineer's ID?"
},
{
  type: 'input',
  name: 'email',
  message: "What is the engineer's email?"
},
{
  type: 'input',
  name: 'github',
  message: "What is the engineer's GitHub username?"
}

]).then(answers => {
  const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
  teamMembers.push(engineer);
  addIntern();
});
}
function addIntern() {
  inquirer.prompt([
    {
      type: 'input',
        name: 'name',
        message: "What is the intern's name?"
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the intern's ID?"
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the intern's email?"
    },
    {
      type: 'input',
      name: 'school',
      message: "Which school does the intern attend?"
    }
  ]).then(answers => {const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
    teamMembers.push(intern);
    buildTeam();
  });
}
function buildTeam() {
  // Building the team
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR)
  }
  fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
}

init();