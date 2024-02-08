class Circle {
    constructor(color = shapeColor) {
        this.color = color;
    }
    
    setColor(color) {
        this.color = color;
    }
    
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

module.exports = Circle;