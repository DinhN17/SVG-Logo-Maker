const Element = require('../lib/element');

describe('Element', () => {
    describe('att2Str', () => {
        it('should transform array attributes to a string', () => {
            const element = new Element('test', [{key: 'height', value: '200'}, {key: 'width', value: '300'}], '');
            expect(element.att2Str()).toEqual('height="200" width="300"')
        })
    })
    describe('render', () => {
        it('should create an svg element', () => {
            const element = new Element('svg', [{key: 'height', value: '200'}, {key: 'width', value: '300'}], 'SVG');
            expect(element.render()).toEqual('<svg height="200" width="300">SVG</svg>');
        })
    })
    describe('setColor', () => {
        it('should set color to yellow', () => {
            let element = new Element('test',[],'');
            element.setColor('yellow');
            expect(element.render()).toEqual('<test fill="yellow"></test>');
        })
    })
})