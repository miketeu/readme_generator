import inquirer from 'inquirer';
import fs from 'fs/promises';
//import dataReadMe from './generateMarkdown.mjs';


let {title, description, installation, usage, license, contributing, tests} = await inquirer
    .prompt([
        /* Pass in questions here. */
        {
            type: 'input',
            name: 'title',
            message: "What is the title of your project.  ",
            //validate: (value) == {if(value){return true}, else: {return: 'I need a value to continue'}
        },
    {
        type: 'input',
        name: 'description',
        message: "Write a description of your project.  ",
        //validate: (value) == {if(value){return true}, else: {return: 'I need a value to continue'}
    },

    {
        type: 'input',
        name: 'installation',
        message: "What are your instructions for installing your software?  ",

        default(){
            return 'Clone';
        }
    },


    {
        type: 'input',
        name: 'usage',
        message: "Describe for your users the best use of this software.  ",
        //validate: (value)=={ if(value){return true}, else: {return: 'I need a value to continue'}

    },

    {
        type: 'list',
        name: 'license',
        message: "Select your license from the list.  ",
        choices: ['MIT', 'ISC', 'GNUPLv3'],
       // List of licensing options.
      // filter(val){
       //     return val.toLowerCase();
      // }
     //List of licenses look in npm inquirer for lists.
    },

  
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter the names of all your contributers to this project.',
    },

    {
        type: 'input',
        name: 'tests',
        message: 'Enter the details of any tests that are relevent to this project. ',
    },
    ])


 /*   
// function to write README file
function writeToFile('README.md', data) {

    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("success")
        }
    })

}
*/
    //Query function
/*
    function inquirer(_prompt,questions, QuestionCollection, any) {
        then((answers) => {
            console.log(answers)
            return answers
        })
        .catch((error) => {
            console.log(error)
        });
    }
   */ 
/*
   function generateLicense(license){
      if(license === 'mit'){
            [![License, MIT](`https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT`),
       ] }
    }
    */


    /* Description 
      * Table of Contents 
      * Installation 
      * Usage 
      * License 
      * Contributing 
      * Tests 
      * Questions */

    /*List of licences look in npm inquirer for lists. */
   
    


  let readmeText = `
    # title
    ${title}

    # Project Description
    ${description}

     ## installation
    ${installation}

    ## usage
    ${usage}

    ## license
    ${license}

    ## contributers
    ${contributing}
    
    ## tests
    ${tests}
    
    `


    
   fs.writeFile('README.md', readmeText)

   //function generateMarkdown(readmeText) 
//let dataReadme = function() {writeToFile('README.md', dataReadMe)
{ //return 
 `# ${title}
  

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
  
  
//fs.writeFile('README.md', readmeText)

//export default readmeText() 