class Square {
    constructor(color = shapeColor) {
        this.color = color;
    }
    
    setColor(color) {
        this.color = color;
    }
    
    render() {
        return `<rect x="150" y="100" width="160" height="160" fill="${this.color}">`;
    }
}

module.exports = Square;