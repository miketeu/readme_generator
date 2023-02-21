
/*
// Creating a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`;
  }
  return "";
}
// Creating a function that returns the license link
function renderLicenseLink(license) {
  if (license !== "none") {
    return `\n* [License](#license)\n`;
  }
  return "";
}

//Creating a function that returns the license section of README
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License
        
        Licensed under the ${license} license.`;
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

//Creating a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
by ${data.name}
${renderLicenseBadge(data.license)}
## Description
${data.description}

## Table of Contents
* [Description](#description)
* [Usage](#usage)
* [How to Use This Application](#How to Use This Application)
* [Contributors](#contributors)

${renderLicenseLink(data.license)}
## Description
${data.description}
`;
}
*/
/*
## Deployed Application URL
${data.link}
## Screenshot
[alt-text]("${data.screenshot}")
*/

// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
  
  `;
  }
  
  module.exports = generateMarkdown;
  