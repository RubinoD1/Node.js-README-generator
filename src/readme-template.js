//uses backticks ` not '****
//ReadMe template literal
const generateReadme = (title, description, installation, usage, license, tests, github, email) => {
    return `
       # ${title}
      ## Description 
      ${description}
      ## Table of contents
      ## Installation
      ${installation}
      ## Usage
      ${usage}
      ## License
      ${license}
      ## Tests
      ${tests}
      ## Questions
      Github: ${github}
      Contact me by email: ${email}
  `; 
 };


 module.exports = generateReadme;