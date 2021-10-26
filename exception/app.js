const person = {children: [{name: "Ivan"}]}
const array = null;
try {
    console.log( person.children[0].name );
    console.log( array.push(1) );
} catch (e) {
    console.log( e.message );
} finally {
    console.log("Always")
}

const divider = (a,b) => {
    if (b===0) {
        throw new Error("Division by zero!!!");
    }
    return a/b;
}


try {
    console.log( divider(1,10) );
} catch (e) {
    console.log( e.message );
}

console.log('test');