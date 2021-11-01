const foo = require('./two');
const greeting = require('./greeting');

import 'bootstrap/dist/css/bootstrap.css';
import '../scss/style.scss';

import multi,  { sum } from './sum';

console.log( 'Hello world!' );
console.log( "I'm web-developer" );

require('./one');

foo();

greeting("Ivan");
greeting("Marya");

console.log( sum(2,3) );
console.log( sum(10,5) );

console.log( multi(4,5) );

const header = document.createElement('h2');
header.textContent = 'Hello world!';
document.body.append(header);