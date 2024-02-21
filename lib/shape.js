
const Element = require('./element');

class Shape extends Element {
    constructor(name, attributes) {
        super(name, attributes);        
    }
    setColor(color) {
        this.attributes.push({key: 'fill', value: color});
    }
    render() {
        let attStr = this.attributes.map((att) => {
            return `${att.key}="${att.value}"`;
        }).join(' ');
        // attStr.trim();
        return `<${this.name} ${attStr}/>`;
    }
}

module.exports = Shape;