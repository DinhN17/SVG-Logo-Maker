const Shape = require('./shape');

class Circle extends Shape {
    constructor() {
        super('circle', [{key: 'r', value: '45'}, {key: 'cx', value: '50'}, {key: 'cy', value: '50'}]);
    }
}

module.exports = Circle;