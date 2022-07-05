// TODO: Include packages needed for this application
/*The require statement is a built-in function that's globally available in Node.js. 
It allows the app.js file to access the fs module's functions through the fs assignment.
*/ 
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadme =require('./src/readme-template.js');
const generateMarkdown = require('./Develop/utils/generateMarkdown.js');



// TODO: Create an array of questions for user input
const questions = [
   {
      type: 'input',
      name: 'title',
      message: 'What is the title of your README? (Required)',
      //check to make sure user has inputted the required info 
      validate: nameInput => {
         if (nameInput) {
            return true;
         } else {
            console.log('Please enter a title for the README');
         }
      }
   },
   {
      type: 'confirm',
      name: 'confirmDescription',
      message: 'Would you like to enter a description?',
      default: true
   },
   {
      type: 'input',
      name: 'description',
      message: 'Enter a description',
      when: ({ confirmDescription }) => {
         if (confirmDescription) {
            return true;
         } else {
            return false;
         }
      }
   },
   {
      type: 'confirm',
      name: 'confirmInstallation',
      message: 'Would you like to enter installation instructions?',
      default: true
   },
   {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions',
      when: ({ confirmInstallation }) => {
         if (confirmInstallation) {
            return true;
         } else {
            return false;
         }
      }
   },
   {
      type: 'confirm',
      name: 'confirmUsage',
      message: 'Would you like to enter usage information?',
      default: true
   },
   {
      type: 'input',
      name: 'usage',
      message: 'Enter usage information',
      when: ({ confirmUsage }) => {
         if (confirmUsage) {
            return true;
         } else {
            return false;
         }
      }
   },
   {
      type: 'list',
      message: 'Select your license',
      //added only a few licenses as the list would be very long otherwise.
      choices: ['Apache License 2.0', 'GNU GPLv3', 'MIT', 'ISC'],
      name: 'license'
   },
   {
      type: 'confirm',
      name: 'confirmContributing',
      message: 'Would you like to enter contributing information?',
      default: true
   },
   {
      type: 'input',
      name: 'contributing',
      message: 'Enter contributing instructions',
      when: ({ confirmContributing }) => {
         if (confirmContributing) {
            return true;
         } else {
            return false;
         }
      }
   },
   {
      type: 'confirm',
      name: 'confirmTests',
      message: 'Would you like to enter tests information?',
      default: true
   },
   {
      type: 'input',
      name: 'tests',
      message: 'Enter tests information',
      when: ({ confirmTests }) => {
         if (confirmTests) {
            return true;
         } else {
            return false;
         }
      }
   },
   {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub user name? (Required)',
      validate: nameInput => {
         if (nameInput) {
            return true;
         } else {
            console.log('Please enter a GitHub user name');
         }
      }
   },
   {
      type: 'confirm',
      name: 'confirmEmail',
      message: 'Would you like to enter email information?',
      default: true
   },
   {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
      when: ({ confirmEmail }) => {
         if (confirmEmail) {
            return true;
         } else {
            return false;
         }
      }
   }
];

// TODO: Create a function to write README file
function writeToFile(data) {
   fs.writeFile("./Develop/utils/README.md", generateReadme(data), err => {
      if (err) throw err;
      console.log('README created! Check out the README.md file in the utils folder!');
   });
   
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data){
     generateMarkdown(data) 
     writeToFile(data)
    });
};

// Function call to initialize app
init();




/*fs.writefile
The first argument is the file name that will be created, or the output file.
The second argument is the data that is being written: the README string template.
The third argument is the callback function that will handle any errors as we as the success message.
fs.writeFile('README.md', generateReadme(data), err => {
   if (err) throw err;
   console.log('README created! Check out README.md to see the output!');
});
*/
