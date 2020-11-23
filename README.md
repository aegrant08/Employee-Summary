# Employee-Summary

# Description

The application takes the user's input and, through JavaScript and Node.js, generates an HTML template for a company to use to show off their team.

# Installation

The user must run `npm install` to install inquirer and jest dependencies.

# Usage

The user must input the information for each member of their team. Once they are done inputting the data for their team, the user must select `No more employees`. The message `The file was saved!` will let the user know the were successful.

![Example](assets/example.gif?raw=true)

Upon completion, the user should go to the output file and open the team.html file in their browser. The generated HTML file should look like this:

![Team](assets/screen-shots/2-generated-team.png?raw=true)

# Tests

Using the jest dependency, tests were run to ensure the code would produce the desired result. Run `npm run test` in the root file.

![Test](assets/screen-shots/1-npm-tests.png?raw=true)

# Technologies Used

- Node.js
- JavaScript
- HTML

# Project Challenges

One of the challenges to this project was understanding the classes and subclasses to make sure the manager, engineer, and intern subclasses all called the correct information from the employee class. Another challenge was to make sure the classes were set up correctly to ensure they passed. It involved a lot of double checking and refactoring my code.


