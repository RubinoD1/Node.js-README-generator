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
//ReadMe template literal
const generateReadme = (title, description) => {
   return `
      # ${title}
     ## Description 
     ${description}
 `; 
};

/*fs.writefile
The first argument is the file name that will be created, or the output file.
The second argument is the data that is being written: the README string template.
The third argument is the callback function that will handle any errors as we as the success message.
*/
fs.writeFile('README.md', generateReadme(title, description), err => {
   if (err) throw err;


   console.log('README created! Check out README.md to see the output!');
});









