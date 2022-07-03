// TODO: Include packages needed for this application
/*The require statement is a built-in function that's globally available in Node.js. 
It allows the app.js file to access the fs module's functions through the fs assignment.
*/ 
const inquirer = require('inquirer');
//const fs = require('fs');
//const generateReadme =require('./src/readme-template.js');

// TODO: Create an array of questions for user input
//const questions = [];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();




//pageHTML****
//const readme = generateReadme(title, description, installation, usage, license, tests, github, email);
//console.log(readmeDataArgs);




/*fs.writefile
The first argument is the file name that will be created, or the output file.
The second argument is the data that is being written: the README string template.
The third argument is the callback function that will handle any errors as we as the success message.

fs.writeFile('README.md', generateReadme(title, description, installation, usage, license, tests, github, email), err => {
   if (err) throw err;


   console.log('README created! Check out README.md to see the output!');
});

*/

const promptUser = () => {
   return inquirer.prompt([
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
         type: 'input',
         name: 'description',
         message: 'Enter a description'
      },
      {
         type: 'input',
         name: 'installation',
         message: 'Enter installation instructions'
      },
      {
         type: 'input',
         name: 'usage',
         message: 'Enter usage information'
      },
      {
         //type: checkbox 
         type: 'input',
         name: 'license',
         message: 'Enter license information'
         //choices: ['','',]
      },
      {
         type: 'input',
         name: 'contributing',
         message: 'Enter contributing instructions'
      },
      {
         type: 'input',
         name: 'tests',
         message: 'Enter tests information'
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
         type: 'input',
         name: 'email',
         message: 'What is your email address?'
      }
   ]);
};

promptUser()
.then(answers => console.log(answers))
.then(promptUser)
.then(userAnswers => console.log(userAnswers));



