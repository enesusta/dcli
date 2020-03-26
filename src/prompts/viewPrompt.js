
const choices = [
    'container',
    'image',
    'volume'
];

const message = "What would you like to see";
const type = "type";

module.exports = {
    type: 'list',
    message: message,
    name: type,
    choices: choices
};