const Element = require('./element');

// class Text is inherented from Element with properties name is fixed to text,
// attributes are needed for text: x,y-> position of text, font-size, text-anchor, and text
// uses for keep and render an text element with syntax "<text x="x" y="y" font-size="fontSize" text-anchor="textAnchor" fill="color">text</text>"
class Text extends Element {
    constructor(x, y, fontSize, textAnchor, text) {
        super('text', [{key: 'x', value: x}, 
        {key: 'y', value: y}, 
        {key: 'font-size', value: fontSize}, 
        {key: 'text-anchor', value: textAnchor}]);
        this.textContent = text;
    }
}

module.exports = Text;