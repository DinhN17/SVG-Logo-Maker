const inquirer = require('inquirer');
// to limit 3 characters
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxlength-text', MaxLengthInputPrompt)

// get from lib
const Circle = require('./lib/circle');
const Element = require('./lib/element');
// const Shape = require('./lib/shape');
const Square = require('./lib/square');
const Triangle = require('./lib/triangle');


const fs = require('fs');


function makeLogo({text, textColor, shape, shapeColor,}) {
//     <svg height="140" width="500" xmlns="http://www.w3.org/2000/svg">
//   <ellipse cx="200" cy="80" rx="100" ry="50" fill="yellow" />
//   Sorry, your browser does not support inline SVG.  
// </svg>
    var shapeSVG = "";
    switch (shape) {
        case 'circle':
            shapeSVG = new Circle();
            shapeSVG.setColor(shapeColor);
            break;
        case 'triangle':
            shapeSVG = new Triangle();
            shapeSVG.setColor(shapeColor);
            break;
        default:
            shapeSVG = new Square();
            shapeSVG.setColor(shapeColor);
            break;
    };

    var textSVG = new Element('text', [{key: 'x', value: '50'}, {key: 'y', value: '65'}, {key: 'fill', value: textColor}, {key: 'font-size', value: '60'}, {key: 'text-anchor', value: 'middle'}], text);
    // var svg = new Element('svg', [{key: 'height', value: '200'}, {key: 'width', value: '300'}], shapeSVG);
    console.log(shapeSVG);
    console.log(textSVG);
    
    return `<svg width="300" height="200">
  ${shapeSVG.render()}
  ${textSVG.render()}
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