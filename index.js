const inquirer = require('inquirer');
// to limit 3 characters
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxlength-text', MaxLengthInputPrompt)

// get from lib
const Circle = require('./lib/circle');
const Text = require('./lib/text');
const Square = require('./lib/square');
const Triangle = require('./lib/triangle');

const fs = require('fs');

function makeLogo({text, textColor, shape, shapeColor,}) {
    var logoShape, logoText = "";
    const r = 50;
    const fontSize = r;
    const circleTextY = 1.26*r;
    var x = r; 
    var y = r;
    
    switch (shape) {
        case 'circle':
            logoShape = new Circle(r, x, y);
            //same x to shape to make sure text inside of shape
            logoText = new Text(x, circleTextY, fontSize, 'middle', text); 
            
            break;
        case 'triangle':
            logoShape = new Triangle(`${2*r}, 0 ${4*r}, ${3.464*r} 0, ${3.464*r}`);
            //same x to the top point of triangle to make sure text inside of shape
            logoText = new Text(2*r, 0.68*3.464*r, fontSize, 'middle', text); 
            break;
        default:
            logoShape = new Square(2*r, 0, 0);
            //same x=r is the middle of circle to make sure text inside of shape
            logoText = new Text(r, circleTextY, fontSize, 'middle', text);
            break;
    };

    // set color
    logoShape.setColor(shapeColor);
    logoText.setColor(textColor);

    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${logoShape.render()}
  ${logoText.render()}
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
            fs.writeFile(`./dist/${answers.shape}-logo.svg`, logoSVG, (err) => {
                err ? console.log(err) : console.log(`Generated ./dist/${answers.shape}-logo.svg`);
            });
        });
};

init();