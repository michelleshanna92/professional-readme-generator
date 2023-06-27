// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // Define license badge URLs based on the license name
  const licenseBadges = {
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'Apache 2.0': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    // Add more license badges as needed
  };

  // Return the corresponding badge URL based on the license
  return licenseBadges[license] || '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // Define license links based on the license name
  const licenseLinks = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
    // Add more license links as needed
  };

  // Return the corresponding license link based on the license
  return licenseLinks[license] || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // Return the license section with appropriate formatting
  if (license) {
    return `
## License

This project is licensed under the [${license}](${renderLicenseLink(license)}) license.
`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Why did you build this project?

${data.why}

## What problem does it solve?

${data.problem}

## What did you learn?

${data.learn}

## How can a user install this application?

${data.install}

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;

