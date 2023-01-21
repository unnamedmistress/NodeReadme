//
// packages needed for this application
//package needed: npm inquirer JSON package
const fs = require('fs');
const inquirer = require('inquirer');
const {renderLicenseBadge} = require('./generateMarkdown.js');
const { renderLicenseLink} = require('./generateMarkdown.js');

//  array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'Why did you build this project?',
    name: 'reasonForBuild',
    
  },
  {
    type: 'input',
    message: 'What problem does it solve?',
      name: 'problemSolved'
  },
  {
    type: 'input',
    message: 'What installation did you use (inquirer)',
    name: 'installation',
    
  },
  {
    type: 'list',
    message: 'What license does this have?',
    name: 'license',
    choices: ['MIT', 'ISC', 'GPL'],
    
  },
  {
    type: 'input',
     message: 'Who gets the credit (you)',
    name: 'credit',
   
  },
  {
    type: 'input',
    message: 'Steps required to install the project?',
    name: 'installationSteps',
    
  },
  {
    type: 'input',
    message: 'Intended usage',
    name: 'intendedUsage',
    
  },
];


function init() {
  
inquirer
.prompt(questions)
   .then((answers) => {
    const filename = `${answers.reasonForBuild.toLowerCase().split(' ').join('')}.json`;
    fs.writeFile(filename, JSON.stringify(questions && answers, null, '\t'), (err) => {
        if (err) throw err;
        console.log(answers);
        fs.readFile(filename, (err, data) => {
          if (err) throw err;
          const jsonData = JSON.parse(data);
          const licenseBadge = renderLicenseBadge(jsonData.license);
          const link = renderLicenseLink(jsonData.license);
          let readme = `
          # Title: ${jsonData.reasonForBuild}\n\n
          ## Problem Solved \n${jsonData.problemSolved}\n\n
          ## Installation \n${jsonData.installation}\n\n
          ## License and Link: ${link}\n${licenseBadge}\n\n
          ## Credit \n${jsonData.credit}\n\n
          ## Installation Steps \n${jsonData.installationSteps}\n\n
          ## Intended Usage \n${jsonData.intendedUsage}`;
          // Append the badge to the readme file
          fs.writeFile("readme.md", readme, (err) => {
              if (err) throw err;
              console.log("readme.md file created");});

          })
    });
  });}
// Function call to initialize app
init();


