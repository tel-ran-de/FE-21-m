// alert("Alert window")
// confirm("Some question?")
// prompt("Field with message")


console.log('Hello, World!!!')

const PI = Math.PI
console.log( PI )


let a = 5;
console.log(a)
a = 6
console.log(a)
console.log( typeof a )
a = "Hello"
console.log(a)
console.log( typeof a )

let b,c;
b = "-10.5"
c = 20
d = 10

console.log( + -100 )

console.log( c + d + +(b) )

console.log( 10/0 )

console.log( 1=="1" )

a = 1
b = "1"

console.log( a.toString() === b.toString() )

if ( a === b ) {
    console.log("Equals")
} else {
    console.log(" Not equals ")
}

switch (PI) {
    case 1: {
        console.log("Wow!!!")
        break
    }
    case 2: {
        console.log("Wow!!!")
        break
    }
    case 3.141592653589793: {
        console.log("Yeaaa!!!")
        break
    }
    default :
        console.log("I don't know")
}

for (let i = 0; i < 10; i++) {
    console.log("i = " + i)
}

const ar = [1,2,3,4,5]
console.log( ar )
console.log( typeof ar )

ar.push(6)
ar.push("Hello")
console.log(ar)

ar.pop()
console.log( ar )
ar.shift()
ar.unshift("Hello")
console.log(ar)

ar[4] = 'Four'
console.log(ar)

for (let i = 0; i < ar.length; i++) {
    console.log(ar[i])
}

const ar1 = [];
console.log( ar1.length )

if ( ar1.length ) {
    console.log("Yes")
} else {
    console.log("No")
}

a = "              ";

if ( a.trim() ) {
    console.log("Yes")
} else {
    console.log("No")
}

function f1() {
    console.log("I'm function")
}

f1()

const f2 = function() {
    console.log("I'm function too")
}

f2()

const f3 = () => {
    console.log("And I'm function!!!")
}

f3()

const square = (a) => {
    return a*a
}

const square1 = a => {
    return a*a
}

const square2 = a => a*a

console.log( square2(10) )

const isEvent = num => num % 2 === 0

console.log( isEvent(3) )
console.log( isEvent(2) )

console.log( parseInt( 10/3) )