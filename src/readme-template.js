//creates the README file content based on user input 
function generateReadme(data) {
    
return `# ${data.title} ${data.badge}
  

${descriptionText}

## Table of contents
 
${data.confirmDescription}
${data.confirmInstallation}
${data.confirmUsage}
- [License](#License)
${data.confirmContributing}
${data.confirmTests}
- [Questions](#Questions) 
      

${installationText}
      

${usageText}
      
## License <div id='License'>
${data.license}

${data.link}
      

${contributingText}
      

${testsText}
      
## Questions <div id='Questions'>
      
Github: https://github.com/${data.github}
      
${emailText}
  `; 
 };


 module.exports = generateReadme;