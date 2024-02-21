const Circle = require('../lib/circle');

describe('Circle', () => {
    describe('render', () => {
        it('should create a blue circle', () => {
            const shape = new Circle();
            shape.setColor('blue');
            expect(shape.render()).toEqual('<circle r="45" cx="50" cy="50" fill="blue"/>');
        })
    })    
})