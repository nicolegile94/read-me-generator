//const fs = require('fs');
//const generateMarkdown = require('./Develop/utils/generateMarkdown.js');
const inquirer = require('inquirer');
console.log(inquirer);
// array of questions for user
inquirer
    .prompt([
        {
            type: 'input',
            name: 'File Name',
            message: "What is the name of your file?"
        }
    ])
    .then(answers => console.log(answers));
const questions = [

    //installation (Required)
    //What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.


    //Usage (Required)
    //Provide instructions and examples for use. Include screenshots as needed. 

    //Credits (Required)
    //List your collaborators, if any, with links to their GitHub profiles.
    //If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
    //If you followed tutorials, include links to those here as well.


    //License (Required)
    //The last section of a good README is a license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/)

    //Badges
    //Badges aren't _necessary_, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

    //Contributing
    //If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own.

    //Tests
    //Go the extra mile and write tests for your application. Then provide examples on how to run them.


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
