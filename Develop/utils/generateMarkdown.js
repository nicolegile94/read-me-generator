// function to generate markdown for README
profileDataArgs = process.argv.slice(2, process.argv.length);
const [fileName, data] = profileDataArgs;

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
