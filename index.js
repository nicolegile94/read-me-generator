const fs = require('fs');
const generateMarkdown = require('./Develop/utils/generateMarkdown.js');
const inquirer = require('inquirer');
const { flatMap } = require('lodash');
const { fstat } = require('fs');


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
            type: 'checkbox',
            name: 'license',
            message: 'This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/).',
            choices: ['GNU GLP', 'Apache', 'Ms-PL', 'BSD', 'CDDL', 'EPL', 'MIT']
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Add guidelines for how you would like other developers to contribute to this project'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Add testing instructions.'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Add your GitHub username'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address'
        }
    ]); 
};
const questions = [

];

// function to write README file

promptUser().then(templateData => {
    const pageMD = generateMarkdown(templateData);
    
    fs.writeFile('./README.md', pageMD, err => {
        if (err) throw new Error(err);

        console.log('Page created! Check out README.md in this directory to see it!');
    });
});

// function to initialize program
//function init() {

//}

// function call to initialize program
//init();
