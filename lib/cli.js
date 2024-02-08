import inquirer from 'inquirer';
import fs from 'fs';
import Circle from './circle.js';
import Square from './square.js';
import Triangle from './triangle.js';

export default class CLI {
    constructor() {
        this.shapeOptions = ['Square', 'Circle', 'Triangle'];
    }

    async promptUser() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'characters',
                message: 'Enter three characters to be used in the logo:',
            },
            {
                type: 'input',
                name: 'letterColor',
                message: 'Enter the color for the letters:',
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Choose a shape for the logo:',
                choices: this.shapeOptions,
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Enter the color for the shape:',
            },
        ]);
    }

    async run() {
        const userData = await this.promptUser();
        console.log(userData);

        let shape;
        switch (userData.shape) {
            case 'Circle':
                shape = new Circle(userData.shapeColor);
                break;
            case 'Square':
                shape = new Square(userData.shapeColor);
                break;
            case 'Triangle':
                shape = new Triangle(userData.shapeColor);
                break;

            default:
                console.error('No shape selected');
                return;
        }

        const svgContent = this.generateSVG(shape);
        this.writeToFile(svgContent);
    }

    generateSVG(shape) {
        return `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

                ${shape.render()}
                
            </svg>
        `;
    }

    writeToFile(svgContent) {
        fs.writeFileSync('./examples/logo.svg', svgContent);
        console.log('SVG file created successfully!');
    }
}
