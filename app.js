const box = document.querySelector('#app')

// console.log( box )

const header2 = document.createElement('h2')
header2.textContent = 'Hello World!'
box.append(header2)

const list = document.createElement('ul')
//
// const listItem1 = document.createElement('li')
// listItem1.textContent = 'Item 1'
// const listItem2 = document.createElement('li')
// listItem2.textContent = 'Item 2'
// const listItem3 = document.createElement('li')
// listItem3.textContent = 'Item 3'
//
//
// list.append(listItem1,  listItem2, listItem3)

const valuesList = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9']

// for (let i = 0; i < valuesList.length; i++) {
//     const liEle = document.createElement('li')
//     liEle.classList.add("box"+i)
//     liEle.textContent = valuesList[i]
//     list.append(liEle)
// }


// valuesList.forEach( el => {
//     const liEle = document.createElement('li')
//     liEle.textContent = el
//     list.append(liEle)
// } )

for (const listElement of valuesList) {
    const liEle = document.createElement('li')
    liEle.textContent = listElement
    list.append(liEle)
}


box.prepend( list )