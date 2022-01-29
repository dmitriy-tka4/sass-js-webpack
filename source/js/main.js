// main scss file with imports > dist/style.css
import '../scss/index.scss';

// js
import calc from './calc.js';

console.log('i am loaded');

let res = calc(4, 15);

console.log(`result calc = ${res}`);
