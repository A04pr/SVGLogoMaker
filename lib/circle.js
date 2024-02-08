class Circle {
    constructor(color = shapeColor) {
        this.x = 150;
        this.y = 100;
        this.r = 80;
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