let promise = new Promise((res, rej) => {
    setTimeout(() => {
        if (1 !== 2) {
            res(JSON.stringify({name: "Ivan"}))
        } else {
            rej(new Error('Ups-s-s-s'))
        }

    }, 500)
})

console.log("Before call promise");

// promise
//     .then((response) => {
//         return JSON.parse(response)
//     })
//     .then(jsonObject => {
//         console.log( jsonObject )
//         promise
//             .then(res => {
//                 console.log( JSON.parse(res).name )
//             })
//     })
//     .catch((err) => {
//         console.log(err.message)
//     });


const callPromise = async () => {
    const response = await promise;
    const jsonObject = await JSON.parse(response);
    console.log( jsonObject.name )
}

callPromise();

console.log("After call promise");