const Square = require('../lib/square');

describe('Square', () => {
    describe('render', () => {
        it('should create a yellow square', () => {
            let square = new Square();
            square.setColor('yellow');
            expect(square.render()).toEqual('<rect width="100" height="100" fill="yellow"/>');
        })
    })
})