
const index = require ('./index.js');// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
      return "";
  } else {
    const shieldbadges = {
      MIT:"[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)",
      GPL: "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-red.svg)](https://www.gnu.org/licenses/lgpl-3.0.en.html)",
      ISC: "[![License: ISC](https://img.shields.io/badge/License-ISC-green.svg)](https://opensource.org/licenses/ISC)",
    }
  return shieldbadges[license];
  }
  // code to generate license badge based on the passed in license
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
  return "";
}
  const linksTo = {
  ISC: `[ISC](https://opensource.org/licenses/ISC/)`,
  MIT: `[MIT](https://opensource.org/licenses/MIT/)`,
  GPL: `[GPL](https://www.gnu.org/licenses/lgpl-3.0.en.html)`
}
return linksTo[license];

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
} else{
  return `Licensed under the ${this.renderLicenseLink(license)} license`
}

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(license) {
  return `# ${this.renderLicenseSection(jsonData.license)}

`;
}


module.exports = {renderLicenseBadge, generateMarkdown, renderLicenseSection, renderLicenseLink};
