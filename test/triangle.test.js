const Triangle = require('../lib/triangle');

describe('Triangle', () => {
    describe('render', () => {
        it('should create a blue regular triangle', () => {
            const shape = new Triangle('94, 0 188, 164 0, 164');
            shape.setColor('blue');
            expect(shape.render()).toEqual('<polygon points="94, 0 188, 164 0, 164" fill="blue"/>');
        })
    })
})