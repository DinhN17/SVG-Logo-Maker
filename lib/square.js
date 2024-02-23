const Shape = require('./shape');

// class Square is inherented from Shape with properties name is fixed to rect and
// attributes are needed for draw a square width = height = length x, y to set position of square,
// uses for keep and render an svg square shape with syntax "<rect width="length" height="length" x="x" y="y" fill="color"/>"
class Square extends Shape {
    constructor(length, x, y) {
        super('rect', [{key: 'width', value: length},
                        {key: 'height', value: length},
                        {key: 'x', value: x},
                        {key: 'y', value: y}
                    ]);
    }
}

module.exports = Square;