const Shape = require('./shape');

class Triangle extends Shape {
    constructor() {
        super('polygon', [{key: 'points', value: '150, 18 244, 182 56, 182'}]);
    }
}

module.exports = Triangle;