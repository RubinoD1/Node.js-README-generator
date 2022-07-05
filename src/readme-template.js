//templateData reflects that the parameter now accepts the promise object returned by inquirer
function generateReadme(data) {
    


//uses backticks ` not '****

    return `
       # ${data.title}
      ## Description 
      ${data.description}
      ## Table of contents
      ## Installation
      ${data.installation}
      ## Usage
      ${data.usage}
      ## License
      ${data.license}
      ## Tests
      ${data.tests}
      ## Questions
      Github: ${data.github}
      Contact me by email: ${data.email}
  `; 
 };


 module.exports = generateReadme;