const numbers = [1,2,4,6,3,8,4,7,5,0,6];
numbers.push(100) // Добавляем в конец
console.log(numbers)
numbers.pop() // Удаляем последний
console.log(numbers)
numbers.shift() // Удаляем первый
console.log(numbers)
numbers.unshift(100) // Добавляем первый
console.log(numbers)

numbers.splice(1, 1)
console.log(numbers)
numbers.splice(1,2,5,5)
console.log(numbers)

const p1 = {name: "Ivan", age: 29}
const p2 = {name: "Marya", age: 25}
const p3 = {name: "Serge", age: 33}

const persons = [p1,p2]
console.log( persons )
persons.splice(0, 1, p3)
console.log(persons)

const newArr = numbers.slice(2,5)
console.log(newArr)
console.log(numbers)

const concatArr = newArr.concat(numbers, persons, p1)
// console.log(concatArr)
// console.log(numbers, newArr)
console.log("=============")
// concatArr.forEach( function(element) {
//     console.log(element) } )

// concatArr.forEach( (element) => {console.log(element)} )
// newArr.forEach( (ele, index, array) => {
//     console.log(`${index * 10}\t${ele}\t in ${array}`) // index + "\t" + ele + "\t in " + array
// })

// console.log( numbers.indexOf(5) )
// console.log( numbers.indexOf(5, 2) )
//
// console.log( numbers.lastIndexOf(5) )
//
// console.log( numbers.includes(50) )

// let result = persons.find( person => person.age === 25 )
// console.log( result )
// result = persons.findIndex( person => person.age === 25 )
// console.log( result )
// result = persons.findIndex( person => person.age === 50 )
// console.log( result )

// let evens = numbers.filter( item => item%2===0 )
// console.log( evens )
//
// evens = numbers.filter( item => item > 1000 )
// console.log( evens )

// const squares = numbers.map( ele => ele * ele )
// console.log( squares )
// const names = persons.map( (person) => {
//     return person.name
// } )
// console.log( names )

// const letters = ['a', 'f', 'y', 'A', 'c', 'e', 'b', 2, '[', '@']
// const letters1 = letters.sort()
// letters1.push('z')
// console.log( letters )
// console.log( letters1 )


// const compare = (a,b) => a-b
//
// console.log( numbers.sort( compare ) )
//
// console.log( numbers.reverse() )

// console.log( persons.sort( (a,b) => a.age - b.age ) )


// let str = "Hello, world"
// console.log( str.split('').reverse().join('') )

// for (let i = 0; i < numbers.length; i++) {
//     console.log( numbers[i] )
// }

// numbers.forEach( element => console.log( element))

// for( let num of numbers ) {
//     console.log( num )
// }
//
// for( let key in numbers ) {
//     console.log( key )
// }

let summary = numbers.reduce( (_result, item) => {
    return _result += item
}, 0)

console.log( summary )


const letters = ['a', 'f', 'y', 'A', 'c', 'e', 'b']

summary = letters.reduce( (_result, item) => {
    return _result += item.toLowerCase() === item ? item : ''
}, '' )

console.log( summary )

console.log( Array.isArray(numbers) )
console.log( typeof numbers )

const string = "Hello, World"

console.log( Array.isArray(string) )

console.log(string[0]);

console.log( string.length )


for (let i = 0; i < string.length; i++) {
    console.log( string[i] )
}


const param = 'age'

persons.forEach( p => {
    console.log( p[param] )
} )


let avgAge = persons.reduce( (sumAge, p) => sumAge + p.age, 0 ) / persons.length
console.log( avgAge )

let avg = numbers.reduce( (res, number) =>{
    if ( number % 2 !== 0 ) return res
    return { sum: res.sum+number, count: ++res.count }
}, {sum: 0, count:0} )

console.log( avg )
console.log( avg.count !== 0 ? avg.sum / avg.count : 'Нет четных чисел' )


const output = persons.map( person => `<li>${person.name} (${person.age} лет)</li>` ).join("")
console.log( output )