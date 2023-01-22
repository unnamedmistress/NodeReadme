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
    type: 'list',
    message: 'What installation did you use (inquirer)',
    name: 'installation',
    choices: ['inquirer', 'Other'],
    
  },
  {
    type: 'list',
    message: 'What license does this have?',
    name: 'license',
    choices: ['MIT', 'ISC', 'GPL'],
    
  },
  {
    type: 'input',
     message: 'Who contributed to the project?',
    name: 'credit',
   
  },
  {
    type: 'input',
    message: 'Steps required to install the project?',
    name: 'installationSteps',
    
  },
  {
    type: 'input',
    message: 'Describe the intended usage',
    name: 'intendedUsage',
    
  },
  {
    type: 'input',
    message: 'Tests performed',
    name: 'Tests',
    
  },
  {
    type: 'input',
    message: 'Questions? Add your Github and email',
    name: 'questions',
    
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
${licenseBadge}
# Table of Contents
1. [Title: ${jsonData.reasonForBuild}](#title)
2. [Description/Problem Solved](#description)
3. [Installation](#installation)
4. [License and Link: ](#license)
5. [Credit](#credit)
6. [Installation Steps](#installation-steps)
7. [Intended Usage](#intended-usage)
8. [Tests?](#Tests)
9. [Questions?](#questions)

<iframe width="560" height="315" src="https://youtu.be/e60Eswp2EmM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# Title: ${jsonData.reasonForBuild}
## Description/Problem Solved \n${jsonData.problemSolved}
## Installation \n${jsonData.installation}
## License and Link: ${link}\n
## Credit \n${jsonData.credit}
## Installation Steps \n${jsonData.installationSteps}
## Intended Usage \n${jsonData.intendedUsage}
## Tests? \n ${jsonData.Tests}
## Questions? \n ${jsonData.questions}\n`;
          // Append the badge to the readme file
          fs.writeFile("README.md", readme, (err) => {
              if (err) throw err;
              console.log("README.md file created");});

          })
    });
  });}
// Function call to initialize app
init();


