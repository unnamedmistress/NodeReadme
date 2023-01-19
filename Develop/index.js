"type";"module"
// packages needed for this application
//package needed: npm inquirer JSON package

const inquirer = require('inquirer');
//  array of questions for user input
const questions = ['What was your motivation', "Why did you build this project?", "What problem does it solve", "What did you learn?", "What makes your project stand out?", "What installation did you use (inquirer)", "What license does this have?", "Who gets the credit (you)", "Steps required to install the project?", "Intended usage"];

//  a function to write README file
const fs = require('fs');
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    }); 
}

// a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
      // Use the answers to generate the README file
      const data = generateReadmeData(answers);
      writeToFile("README.md", data);
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}


// Function call to initialize app
init();

inquirer
  .prompt([
    /* Pass your questions in here */
    console.log(questions)
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });