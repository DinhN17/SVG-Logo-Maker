const Shape = require('./shape');

// class Triangle is inherented from Shape with properties name is fixed to polygon and
// first attribute is {key: 'points', value: points},
// uses for keep and render an svg triangle shape with syntax "<polygon points="100, 0 200, 173.2 0, 173.2" fill="color"/>"
class Triangle extends Shape {
    constructor(points) {
        super('polygon', [{key: 'points', value: points}]);
    }
}

module.exports = Triangle;