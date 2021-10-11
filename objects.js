const person = {
    fName: "Ivan",
    lName: "Ivanov",
    age: 30,
    getFullName: function() {
        // return this.fName + " " + this.lName
        return `${this.fName} ${this.lName}`
    },
    isOlder: function() {
        return this.age > 50
    }
}

console.log( person.getFullName() )

console.log( person.isOlder() )