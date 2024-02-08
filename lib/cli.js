const inquirer = require('inquirer')
const fs = require('fs');
const svg = require('svg.js');
const Circle = require('./circle');

const shapeOptions = ['Square', 'Circle', 'Triangle'];

function promptUser() {
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
            choices: shapeOptions,
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the color for the shape:',
        },
    ]);
}

async function init() {
    const userData = await promptUser();
    console.log(userData);

    const circle = new Circle(userData.shapeColor);
    console.log(circle.render());
}

init();
