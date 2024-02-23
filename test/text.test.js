const Text = require('../lib/text');

describe('Text', () => {
    it('should create a text element', () => {
        const text = new Text(0, 0, 60, 'middle', 'test');
        expect(text.render()).toEqual('<text x="0" y="0" font-size="60" text-anchor="middle">test</text>');
    })
})