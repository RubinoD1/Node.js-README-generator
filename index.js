// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
//const questions = [];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();

//input
const readmeDataArgs = process.argv.slice(2, process.argv.length);
console.log(readmeDataArgs);

//uses backticks ` not '****
const generateReadme = (titleName, descriptionInfo) => {
   return `
      Title: ${titleName}
      Description: ${descriptionInfo}
 `; 
};
console.log(generateReadme('My README', 'A README file'));





