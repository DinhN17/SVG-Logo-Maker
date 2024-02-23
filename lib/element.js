// class Element uses for keep and render an element with html syntax "<elementName atributes>text content</elementName>"
class Element {
    constructor(name, attributes, textContent) {
        this.name = name;
        this.attributes = attributes;
        this.textContent = textContent;
    }

    setColor(color) {
        this.attributes.push({key: 'fill', value: color});
    }

    att2Str() {
        let attStr = this.attributes.map((att) => {
            return `${att.key}="${att.value}"`;
        }).join(' ');
        return attStr;
    }
    render() {
        return `<${this.name} ${this.att2Str()}>${this.textContent}</${this.name}>`;
    }
};

module.exports = Element;