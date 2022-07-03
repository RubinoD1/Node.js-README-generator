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
//const readme = generateReadme(title, description);
//console.log(readmeDataArgs);




/*fs.writefile
The first argument is the file name that will be created, or the output file.
The second argument is the data that is being written: the README string template.
The third argument is the callback function that will handle any errors as we as the success message.

fs.writeFile('README.md', generateReadme(title, description), err => {
   if (err) throw err;


   console.log('README created! Check out README.md to see the output!');
});

*/

inquirer
   .prompt([
      {
         type: 'input',
         name: 'title',
         message: 'What is the title of your README?'
      }
   ])
     .then(answers => console.log(answers));




