export default class Circle {
    constructor(color = 'black') {
        this.color = color;
    }
    
    setColor(color) {
        this.color = color;
    }
    
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}