import inquirer from 'inquirer';
import fs from 'fs/promises';
 //import generateMarkdown from './generateMarkdown';

let {description, installation, usage, license, contributers, tests} = await inquirer
    .prompt([
        /* Pass in questions here. */
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
       filter(val){
            return val.toLowerCase();
       }
     //List of licenses look in npm inquirer for lists.
    },

  
    {
        type: 'input',
        name: 'contributers',
        message: 'Enter the names of all your contributers to this project.',
    },

    {
        type: 'input',
        name: 'tests',
        message: 'Enter the details of any tests that are relevent to this project. ',
    },
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
   
    ])


    let readmeText = `# Project Description
    ${description}

     ## installation
    ${installation}

    ## usage
    ${usage}

    ## license
    ${license}

    ## contributers
    ${contributers}
    
    ## tests
    ${tests}
    
    `



    fs.writeFile('README.md', readmeText)

 /*
    // Writing README.md File
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }
  // Initializing app
  function init() {
    inquirer.prompt(questions).then((responses) => {
      console.log("Creating Professional README.md File...");
      writeToFile("./README.md", ...generateMarkdown({ ...responses }));
    });
  }
  init(); */