const person = {
    fName: "Ivan",
    lName: "Ivanoff",
    age: 30,
    avatar: "https://w7.pngwing.com/pngs/165/45/png-transparent-computer-icons-male-avatar-white-collar-miscellaneous-blue-text.png",
    isSmoke: false,
    getFullName: function() {
        return this.fName + " " + this.lName
    }
}

const employee = {
    title: 'Web Developer',
    company: 'Google'
}


// console.log( person.age ) // Прямое обращение к свойству
//
// let field = 'fName'
//
// console.log( person[field] ) // Динамическое обращение к свойству
//
// person.isAlcho = false; // Динамическое добавление свойства
// console.log( person )
//
// console.log( person.getFullName() )
//
// person.getAge = function() {return this.age + ' years old'}
//
// console.log( person.getAge() )
// console.log( person )
//
// delete person.getAge
// console.log( person )
//
// console.log( Object.keys( person ) )
// console.log( Object.values( person ) )
// console.log( Object.entries( person ) )

// for (const key in person) {
//     if ( typeof person[key] !== 'function' )
//         console.log( person[key] )
// }

const {fName, lName, abra} = person // Деструктуризация объекта
console.log( fName )
console.log( lName )
console.log( abra ) // Нет такого свойства в объекте, поэтому undefined

const ivan = Object.assign( person, employee)
console.log( ivan )

const numbers = [1,2,3,4,5,6,7,8,9,0] // Деструктуризация массива
const [,,,a,b] = numbers;
console.log(a)
console.log(b)