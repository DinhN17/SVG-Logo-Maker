const Element = require('../lib/element');

describe('Element', () => {
    describe('render', () => {
        it('should create an svg element', () => {
            const shape = new Element('svg', [{key: 'height', value: '200'}, {key: 'width', value: '300'}], 'SVG');
            expect(shape.render()).toEqual('<svg height="200" width="300">SVG</svg>');
        })
    })
})