const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let crawleyTeam = [];

// Asking user what kind of employee they are
function createCrawleyTeam() {
    inquirer.prompt([
        {
            type: "list",
            name: "memberSelection",
            message: "Select team member category.",
            choices: [
                "Manager",
                "Engineer",
                "Intern",
                "No more employees",
            ]
        }
        // determining which set of prompts to provide user
    ]).then(userSelection => {
        switch (userSelection.memberSelection) {
            case "Manager":
                createManager();
                break;
            case "Engineer":
                createEngineer();
                break;
            case "Intern":
                createIntern();
                break;
            case "No more employees":
                render(crawleyTeam);
                break
        }
    })

    // function to add manager to team
    function createManager() {
        // required manager responses
        inquirer.prompt([
            {
                type: "input",
                message: "Please enter your full name.",
                name: "managerName",

            },
            {
                type: "input",
                message: "Please enter your employee ID.",
                name: "managerID",
            },
            {
                type: "input",
                message: "Please enter your employee ID number.",
                name: "managerEmail",
            },
            {
                type: "input",
                message: "Please enter your office number.",
                name: "managerOfficeNumber",
            },
            {
                type: "input",
                message: "Please enter the number of years you have worked at Crawley & Co.",
                name: "managerYears",
            },
        ]).then(userSelection => {
            console.log(userSelection);

            const manager = new Manager(userSelection.managerName, userSelection.managerID, userSelection.managerEmail, userSelection.managerOfficeNumber, userSelection.managerYears)
            crawleyTeam.push(manager)
            createTeam();
        })
    }
    // function to add engineer to team
    function createEngineer() {
        // required engineer responses
        inquirer.prompt([
            {
                type: "input",
                message: "Please enter your full name.",
                name: "engineerName",

            },
            {
                type: "input",
                message: "Please enter your employee ID number.",
                name: "engineerID",
            },
            {
                type: "input",
                message: "Please enter your company email.",
                name: "engineerEmail",
            },
            {
                type: "input",
                message: "Please enter your GitHub user name.",
                name: "engineerGitHub",
            },
            {
                type: "input",
                message: "Please enter the number of years you have worked at Crawley & Co.",
                name: "engineerYears",
            },
        ]).then(userSelection => {
            console.log(userSelection);

            const engineer = new Engineer(userSelection.engineerName, userSelection.engineerID, userSelection.engineerEmail, userSelection.engineerGitHub, userSelection.engineerYears)
            crawleyTeam.push(engineer)
            createTeam();
        })

    }

    // function to add intern to team
    function createIntern() {
        // required intern responses
        inquirer.prompt([
            {
                type: "input",
                message: "Please enter your full name.",
                name: "internName",

            },
            {
                type: "input",
                message: "Please enter your employee ID number.",
                name: "internID",
            },
            {
                type: "input",
                message: "Please enter your company email.",
                name: "internEmail",
            },
            {
                type: "input",
                message: "Please enter your school's name.",
                name: "internSchool",
            },
            {
                type: "input",
                message: "Please enter your degree.",
                name: "internDegree",
            },
        ]).then(userSelection => {
            console.log(userSelection);

            const engineer = new Intern(userSelection.internName, userSelection.internID, userSelection.internEmail, userSelection.internSchool, userSelection.internDegree)
            crawleyTeam.push(intern)
            createTeam();
        })
    }
}

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
