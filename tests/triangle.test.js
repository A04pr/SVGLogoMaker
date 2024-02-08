const Triangle = require('../lib/triangle');

describe('Triangle', () => {
    test('constructor should set color if provided', () => {
        const triangle = new Triangle('blue');
        expect(triangle.color).toBe('blue');
    });

    test('setColor method should set the color', () => {
        const triangle = new Triangle();
        triangle.setColor('green');
        expect(triangle.color).toBe('green');
    });

    test('render method should return correct SVG string', () => {
        const triangle = new Triangle('green');
        const svg = triangle.render();
        expect(svg).toBe('<polygon points="75,50 150,150 225,50" fill="green" />');
    });
});