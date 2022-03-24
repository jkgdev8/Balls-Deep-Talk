const inquirer = require('inquirer');
const fs = require('fs')
const util = require('util');
const {generateRead} = require('./utils/superread');
//const { error } = require('console');

const writeFileAsync = util.promisify(fs.writeFile)

// array of questions for user
const promptUser = () => {
    inquirer.prompt([
        {
          type: 'list',
          name: 'pick',
          message: 'Please choose your favorite sport(Press enter to confirm!)',
          choices: ['NBA: National Basketball Association','NFL: National Football League','MLB: Major League Baseball','MLS: Major League Soccer', 'NHL: National Hockey League']
        },{
          type: 'input',
          name: 'team',
          message: 'Whos your favorite team? (Required)',
          validate: githubInput => {
            if (githubInput) {
              return true;
            } else {
              console.log('Please enter your favorite team!');
              return false;
            }
          }
        },{
          type: 'confirm',
          name: 'confirmAbout',
          message: 'Would you like to enter some information about your favorite team?',
          default: true
        },{
          type: 'input',
          name: 'About',
          message: 'Provide some information about your favorite team:',
          when: ({ confirmAbout }) => confirmAbout
        },{
            type:"list",
            message: "What is the license for this project?",
            name: "License",
            choices: [
                "MIT [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)", 
                "APACHE 2.0 [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)", 
                "artistic-2.0 [![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)", 
                "bsl-1.0 [![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)" , 
                "None"],
        },{
            type:"input",
            name: "Contributing",
            message: "How can users contribute to this project?",
        },{
            type:"input",
            name: "Tests",
            message: "Give test instructions",
        },{
            type:"input",
            name: "Questions",
            message: "Enter your favorite teams link.",
        },
        {
            type: 'input',
            name: 'LinkedIn',
            message: 'Enter your github username.',
        },
        {
            type: 'input',
            name: 'Email',
            message: 'Enter your Email address',
        }
    ]).then(answers => {
        writeToFile(answers)
        console.log('Successfully wrote to sportsREADME.md!')
    }).catch((err) => console.error(err));

};

const writeToFile = answers => {
    writeFileAsync('sportsREADME.md', generateRead(answers))
}

promptUser();

