// function to generate markdown for README
const generateMarkdown = (fileName, data) => {
    return `
    # ${fileName}
    ## The Instillation
    ${data}
    ## Usage

    ##Credits

    ##Licensing

    ##Badges

    ## Contributing

    ##Tests
    `;
};
module.exports = generateMarkdown;
