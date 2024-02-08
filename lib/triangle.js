export default class Triangle {
    constructor(color = 'red') {
        this.color = color; 
    }
    
    setColor(color) {
        this.color = color;
    }
    
    render() {
        return `<polygon points="75,50 150,150 225,50" fill="${this.color}" />`;
    }
}
