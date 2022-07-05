//templateData reflects that the parameter now accepts the promise object returned by inquirer
function generateReadme(data) {
    
return `# ${data.title} ${data.badge}
  
## Description 
${data.description}

## Table of contents

- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Licence](#Licence)
- [Contributing](#Contributing)
- [Test](#Test)
- [Questions](#Questions) 
      
## Installation
${data.installation}
      
## Usage
${data.usage}
      
## License
${data.license}

${data.link}
      
## Contributing
${data.contrabuting}
      
## Tests
${data.tests}
      
## Questions
      
Github: ${data.github}
      
Contact me by email: ${data.email}
  `; 
 };


 module.exports = generateReadme;