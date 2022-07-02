// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
//const questions = [];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();



//input - holds the command-line arguments
const readmeDataArgs = process.argv.slice(2, process.argv.length);

const [title, description] = readmeDataArgs;
console.log(readmeDataArgs);


//uses backticks ` not '****
const generateReadme = (title, description) => {
   return `
      # ${title}
     ## Description 
     ${description}
 `; 
};
console.log(title, description);
console.log(generateReadme(title, description));










