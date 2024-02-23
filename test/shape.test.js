const Shape = require('../lib/shape');

describe('Shape', () => {
    describe('render', () => {
        it('should create an ellipse', () => {
            let shape = new Shape('ellipse', [{key: 'rx', value: '100'}, {key: 'ry', value: '50'}, {key: 'cx', value: '200'}, {key: 'cy', value: '80'}]);
            // shape.setColor('yellow');
            expect(shape.render()).toEqual('<ellipse rx="100" ry="50" cx="200" cy="80"/>');
        });
    })
})