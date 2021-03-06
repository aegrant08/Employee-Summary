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
createCrawleyTeam()

// Asking user what kind of employee they are
function createCrawleyTeam() {
    inquirer.prompt([
        {
            type: "list",
            name: "memberChoice",
            message: "Select team member category.",
            choices: [
                "Manager",
                "Engineer",
                "Intern",
                "No more employees",
            ]
        }
        // determining which set of prompts to provide user
    ]).then(userChoice => {
        switch (userChoice.memberChoice) {
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
                const html = render(crawleyTeam);
                fs.writeFile(outputPath, html, function (err) {
                    if (err) {
                        return console.log(err);
                    }
                    console.log("The file was saved!");
                });
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
                message: "Please enter your company email.",
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
        ]).then(userChoice => {
            console.log(userChoice);

            const manager = new Manager(userChoice.managerName, userChoice.managerID, userChoice.managerEmail, userChoice.managerOfficeNumber, userChoice.managerYears)
            crawleyTeam.push(manager)
            createCrawleyTeam();
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
        ]).then(userChoice => {
            console.log(userChoice);

            const engineer = new Engineer(userChoice.engineerName, userChoice.engineerID, userChoice.engineerEmail, userChoice.engineerGitHub, userChoice.engineerYears)
            crawleyTeam.push(engineer)
            createCrawleyTeam();
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
        ]).then(userChoice => {
            console.log(userChoice);

            const intern = new Intern(userChoice.internName, userChoice.internID, userChoice.internEmail, userChoice.internSchool, userChoice.internDegree)
            crawleyTeam.push(intern)
            createCrawleyTeam();
        })
    }
}
// const html = render(crawleyTeam)
// fs.writeFile(outputPath, html, function (err) {
//     if (err) {
//         return console.log(err);
//     }
//     console.log("The file was saved!");
// });
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
