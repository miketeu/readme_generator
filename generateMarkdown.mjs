// function to generate markdown for README

/* 
function generateMarkdown(data) {
 
   `
# ${title}
  

# ${title}

# Description
${description}
# Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

# Installation
The following necessary dependencies must be installed to run the application properly: ${installation}
# Usage
In order to use this app, ${usage}
# License
This project is licensed under the ${license} license. 
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
# Contributing
​Contributors: ${contributing}
# Tests
The following is needed to run the test: ${tests} `
 }
*/

let dataReadme = function() {writeToFile('README.md', dataReadMe)
{`
 # ${title}
  

 # ${title}
 
 # Description
 ${description}
 # Table of Contents 
 * [Installation](#installation)
 * [Usage](#usage)
 * [License](#license)
 * [Contributing](#contributing)
 * [Tests](#tests)
 * [Questions](#questions)
 
 # Installation
 The following necessary dependencies must be installed to run the application properly: ${installation}
 # Usage
 In order to use this app, ${usage}
 # License
 This project is licensed under the ${license} license. 
 ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
 # Contributing
 ​Contributors: ${contributing}
 # Tests
 The following is needed to run the test: ${tests} `
};
  
  exports.generateMarkdown = function () {
    return dataReadme(); 
  };
}