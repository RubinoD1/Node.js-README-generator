// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
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
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge(data)
}

module.exports = generateMarkdown;
