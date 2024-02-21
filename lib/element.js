class Element {
    constructor(name, attributes, textContent) {
        this.name = name;
        this.attributes = attributes;
        this.textContent = textContent;
    }
    render() {
        let attStr = this.attributes.map((att) => {
            return `${att.key}="${att.value}"`;
        }).join(' ');
        return `<${this.name} ${attStr}>${this.textContent}</${this.name}>`;
    }
};

{/* <svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
  <polygon points="150, 18 244, 182 56, 182" style="fill:lime;stroke:purple;stroke-width:3" />
  Sorry, your browser does not support inline SVG.
</svg> */}

module.exports = Element;