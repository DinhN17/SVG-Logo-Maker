const Element = require('./element');

// class Shape is inherented from Element with properties name and attributes,
// uses for keep and render an svg element with syntax "<elementName attributes/>"
class Shape extends Element {
    constructor(name, attributes) {
        super(name, attributes);        
    }
    render() {
        return `<${this.name} ${this.att2Str()}/>`;
    }
}

module.exports = Shape;