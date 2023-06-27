// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Please provide a short description of your project:',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Why did you build this project?',
    name: 'why',
  },
  {
    type: 'input',
    message: 'What problem does it solve?',
    name: 'problem',
  },
  {
    type: 'input',
    message: 'What did you learn?',
    name: 'learn',
  },
  {
    type: 'input',
    message: 'How can a user install this application?',
    name: 'install',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('README file generated!')
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeData = generateMarkdown(answers); // Generate the README content
    writeToFile('README.md', readmeData); // Write the README file
  });
}

// Function call to initialize app
init();


