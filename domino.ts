import * as domino from 'https://jspm.dev/domino';

var Element = domino.impl.Element; // etc

var window = domino.createWindow('<h1>Hello world</h1>', 'http://example.com');
var document = window.document;

var h1 = document.querySelector('h1');

h1.addEventListener('click', () => console.log(1));
h1.dispatchEvent(new Event("click"))