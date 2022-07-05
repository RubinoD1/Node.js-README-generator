// function that returns a license badge and info link based on which license is passed in
function renderLicenseBadge(data) {
  if (data.license === 'Apache License 2.0'){
    data.badge = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
    data.link = 'More information: (https://opensource.org/licenses/Apache-2.0)';
  } else if (data.license === 'GNU GPLv3') {
    data.badge = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
    data.link = 'More information: (https://www.gnu.org/licenses/gpl-3.0)';
  } else if (data.license === 'MIT') {
    data.badge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
    data.link = 'More information: (https://opensource.org/licenses/MIT)';
  } else if (data.license === 'ISC') {
    data.badge = `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`;
    data.link = 'More information: (https://opensource.org/licenses/ISC)';
    // If there is no license, return an empty string
  } else if (data.license === 'No license') {
    data.badge = '';
    data.link = '';
  }
};




// If not selected return an empty string else display user input
function renderSection(data) {
  //confirm checks: If not selected return an empty string 
  if (!data.confirmDescription){
    descriptionText = ``;
    data.confirmDescription = '';
    //else display user input and create table of contents section
  } else {
    descriptionText = `## Description <div id='Description'>
    ${data.description}`;
    data.confirmDescription = '- [Description](#Description)';
  } 
  
  //installation section and info 
  if (!data.confirmInstallation){
    installationText = ``;
    data.confirmInstallation = '';
  } else {
    installationText = `## Installation <div id='Installation'>
    ${data.installation}`;
    data.confirmInstallation = '- [Installation](#Installation)';
  }
  
  // usage section and info 
  if (!data.confirmUsage){
    usageText = ``;
    data.confirmUsage = '';
  } else {
    usageText = `## Usage <div id='Usage'>
    ${data.usage}`;
    data.confirmUsage = '- [Usage](#Usage)';
  }
  
  //contributing section and info
 if (!data.confirmContributing){
  contributingText = ``;
  data.confirmContributing = '';
 } else {
  contributingText = `## Contributing <div id='Contributing'>
  ${data.contributing}`;
  data.confirmContributing = '- [Contributing](#Contributing)';
}

  //Test section and info 
  if (!data.confirmTests){
    testsText = ``;
    data.confirmTests = '';
  } else {
    testsText = `## Tests <div id='Tests'>
    ${data.tests}`;
    data.confirmTests = '- [Tests](#Tests)';
  }
  
  //email info 
  if (!data.confirmEmail){
    Emailusage = ``;
    emailText= ``;
    
  } else {
    emailText = 
    `Contact me by email: ${data.email}`;
    
  }



};


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge(data);
  renderSection(data);
};

module.exports = generateMarkdown;
