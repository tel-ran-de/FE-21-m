// const person = {
//     fName: "",
//     lName: "",
//     age: "",
//     getFullName: function() {
//         return this.fName + " " + this.lName;
//     }
// }

class Person {
    constructor(fName, lName, age) {
        this.fName = fName;
        this._lName = lName;
        this._age = age;
    }
    get lName() {
        return this._lName;
    }
    set lName(value) {
        this._lName = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    get fName() {
        return this._fName
    }

    set fName(name) {
        if ( name.length < 2 ) {
            console.log( "Слишком мало букв в имени" )
            return;
        }
        this._fName = name
    }

    getFullName() {
        return this.fName + " " + this._lName;
    }

    toString() {
        return `Person { fName=${this.fName}, lName=${this.lName}, age=${this.age}}`;
    }
}

const p1 = new Person("Ivan", "Ivanov", 29);

p1.age++

console.log( p1.getFullName() )

p1.age = 31;

console.log( p1 )