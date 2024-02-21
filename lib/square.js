const Shape = require('./shape');

class Square extends Shape {
    constructor() {
        super('rect', [{key: 'width', value: '100'},{key: 'height', value: '100'}]);
    }
}

module.exports = Square;