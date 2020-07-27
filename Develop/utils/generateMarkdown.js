// function to generate markdown for README
const generateMarkdown = (templateData) => {
};
module.exports = generateMarkdown;


module.exports = templateData => {
  console.log(templateData);
  return `
    # ${templateData.file}

    Table of contents
=================

<!--ts-->
   * [Installation](#installation)
   * [Licensing](#licensing)
   * [Instillation](#instillation)
   * [Usage](#usage)
   * [Credits](#credits)
   * [Contributing](#contributing)
   * [Tests](#tests)
   * [Questions](#questions)
<!--te-->

    ##Licensing
    ${templateData.license}
    ## Instillation
    ${templateData.installation}
    ## Usage
    ${templateData.usage}
    ##Credits
    ${templateData.credits}
    ## Contributing
    ${templateData.contributing}
    ##Tests
    ${templateData.test}
    ##Questions
    ##GitHub Username
    [GitHub](http://github.com/${templateData.github})
    ##Contact
    To contact regarding this project, send an email to ${templateData.email}
    `;
}
