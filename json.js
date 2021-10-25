// const jsonNumberArray = "[1,2,3,4,5,6]";
// const jsonStringArray = "['Hello', 'Name', 'SomeWords here']";
// const jsonObject = '{"name":"Ivan", "age":29}';

const person = {
    fName: "Ivan",
    lName: "Petrov",
    age: 39
}

const jsonPerson = JSON.stringify(person);

console.log( jsonPerson )

const numbers = [1,2,3,4,5,6,7,8,9];

console.log( JSON.stringify(numbers) )

const newPerson = JSON.parse(jsonPerson)
console.log( newPerson )
console.log( newPerson.age )