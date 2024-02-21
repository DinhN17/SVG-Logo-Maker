const inquirer = require('inquirer');
// to limit 3 characters
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxlength-text', MaxLengthInputPrompt)

const fs = require('fs');


function makeLogo({text, textColor, shape, shapeColor,}) {
    
    return `<svg width="300" height="200">
  ${shape}
  ${text}
</svg>`;
};

function init() {

    inquirer
        .prompt([
            {
                type: 'maxlength-text',
                name: 'text',
                message: 'Please provide 3 characters',
                maxLength: 3,
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Please provide color for text',
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Please select shape',
                choices: ['circle', 'triangle', 'square'],
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Please provide color for shape',
            },
        ])
        .then((answers) => {
            const logoSVG = makeLogo(answers);
            fs.writeFile('./dist/logo.svg', logoSVG, (err) => {
                err ? console.log(err) : console.log('Generated logo.svg');
            });
        });
};

init();