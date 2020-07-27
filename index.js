//const fs = require('fs');
//const generateMarkdown = require('./Develop/utils/generateMarkdown.js');
const inquirer = require('inquirer');
const { flatMap } = require('lodash');


// array of questions for user
const promptUser = () => {
    console.log(`
    =================
    Add a New Read Me
    =================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'file',
            message: 'What is the name of your file? (Required)',
            validate: fileInput => {
                if (fileInput) {
                    return true;
                } else {
                    console.log('Please enter a file name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project? (Required)',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please enter installation steps!');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use. (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter instructions');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List your collaborators, if any, with links to their GitHub profiles. (Required)',
            validate: creditsInput => {
                if (creditsInput) {
                    return true;
                } else {
                    console.log('Please list your collaborators!');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'license',
            message: 'This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/). (Required)',
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                } else {
                    console.log('Please enter license information!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Add guidelines for how you would like other developers to contribute to this project'
        }
    ]); 
};
promptUser().then(answers => console.log(answers));
const questions = [

];

// function to write README file
// const pageMD = generateMarkdown(readmeData);
//fs.generateMarkdown('README.md', writeToFile(fileName, data), err => {
   // if (err) throw err;

    //console.log('README complete! Check out README.md to see the output.');
//});


// function to initialize program
//function init() {

//}

// function call to initialize program
//init();
