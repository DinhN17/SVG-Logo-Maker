const Square = require('../lib/square');

describe('Square', () => {
    describe('render', () => {
        it('should create a yellow square', () => {
            let square = new Square(100, 0, 0);
            square.setColor('yellow');
            expect(square.render()).toEqual('<rect width="100" height="100" x="0" y="0" fill="yellow"/>');
        })
    })
})