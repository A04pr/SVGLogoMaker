const Square = require('../lib/square');

describe('Square', () => {
    test('constructor should set color if provided', () => {
        const square = new Square('blue');
        expect(square.color).toBe('blue');
    });

    test('setColor method should set the color', () => {
        const square = new Square();
        square.setColor('green');
        expect(square.color).toBe('green');
    });

    test('render method should return correct SVG string', () => {
        const square = new Square('green');
        const svg = square.render();
        expect(svg).toBe(`<rect x="150" y="100" width="160" height="160" fill="green">`);
    });
});