const Shape = require('./shape');

// class Circle is inherented from Shape with properties name is fixed to circle and
// attributes are needed for draw a circle r and cx, cy to set position of circle,
// uses for keep and render an svg circle shape with syntax "<circle r="50" cx="50" cy="50" fill="color"/>"
class Circle extends Shape {
    constructor(r, cx, cy) {
        super('circle', [{key: 'r', value: r}, 
                            {key: 'cx', value: cx}, 
                            {key: 'cy', value: cy}
                        ]
            );
    }
}

module.exports = Circle;