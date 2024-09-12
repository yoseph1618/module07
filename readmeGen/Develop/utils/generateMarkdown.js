function renderLicenseBadge(license) {
    if (!license) {
      return '';
    }
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
  }
  
  function renderLicenseLink(license) {
    if (!license) {
      return '';
    }
    const licenseLinks = {
      'MIT': 'https://opensource.org/licenses/MIT',
      'GPL-3.0': 'https://www.gnu.org/licenses/gpl-3.0',
      'Apache-2.0': 'https://opensource.org/licenses/Apache-2.0'
    };
    return licenseLinks[license] || '';
  }
  
  function renderLicenseSection(license) {
    if (!license) {
      return '';
    }
    return `## License
  
  This project is licensed under the ${license} license. For more information, see [this link](${renderLicenseLink(license)}).
  `;
  }
  
  function generateMarkdown(data) {
    return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}
  
  ## Installation
  \`\`\`
  ${data.installation}
  \`\`\`
  
  ## Usage
  \`\`\`
  ${data.usage}
  \`\`\`
  
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  ${data.contributing}
  
  ## Features
  \`\`\`
  ${data.features}
  \`\`\`
  
  ## Questions
  If you have any questions, feel free to contact me at ${data.email}.
  `;
  }
  
  export default generateMarkdown;