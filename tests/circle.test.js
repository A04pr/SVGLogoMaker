const Circle = require('../lib/circle');

describe('Circle', () => {
    test('constructor should set color if provided', () => {
        const circle = new Circle('blue');
        expect(circle.color).toBe('blue');
    });

    test('setColor method should set the color', () => {
        const circle = new Circle();
        circle.setColor('green');
        expect(circle.color).toBe('green');
    });

    test('render method should return correct SVG string', () => {
        const circle = new Circle('green');
        const svg = circle.render();
        expect(svg).toBe('<circle cx="150" cy="100" r="80" fill="green" />');
    });
});