const inquirer = require('inquirer');
const fs = require('fs');

const makeLogo({text, textColor, shape, shapeColor,}) {

};

function init() {

    inquirer
        .prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Please provide 3 characters',
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
            fs.writeFile('logo.svg', logoSVG, (err) => {
                err ? console.log(err) : console.log('Generated logo.svg');
            });
        });
};

init();