const foo = require('./two');
const greeting = require('./greeting');

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