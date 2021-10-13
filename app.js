/*

https://www.w3schools.com/cssref/css_selectors.asp

 */


// const header1 = document.getElementsByTagName('h1')[0]
//
// document.getElementsById('id') // #id
// document.getElementsByClassName('red') // .red

const header1 = document.querySelector('h1')
const parItems = document.querySelectorAll('p')

console.log( header1 )

header1.textContent = "Document\n Object Model"

// parItems.forEach( ele => {
//     console.log( ele.innerText )
//     ele.style.fontWeight = "700"
//     // if ( ele.innerText.length > 50 ) {
//     //     ele.style.backgroundColor = "green"
//     // }
//     if ( !ele.classList.contains("black") ) {
//         ele.style.backgroundColor = "green"
//     }
// } )

// header1.style.color = "red"
// header1.style.fontSize = "50px"

// console.log( header1 )

// header1.classList.add('bigRed')

const list = document.querySelector('ul')

console.log( list.children )


list.addEventListener('click', ev => {
    document.querySelectorAll('li').forEach(li => li.classList.remove('active'))
    ev.target.classList.add('active')
    list.querySelectorAll('div').forEach(div => div.hidden = true)
    ev.target.firstElementChild.hidden = false
})

list.querySelectorAll('div').forEach(div => div.hidden = true)
//
// const p1 = document.querySelector('.p1')
// console.log( p1.previousElementSibling )
// console.log( p1.nextElementSibling )
// console.log( p1.parentElement )
// console.log( p1.children )
// console.log( p1.firstElementChild )
// console.log( p1.lastElementChild )
// console.log( p1.children[1] )
// console.log( p1.children.length )

// const p2 = document.querySelectorAll('.p2')
// p2.forEach(p => {
//     if ( p.tagName === 'P' ) {
//         p.innerHTML += '<span>Warning!!!</span>'
//     } else {
//         p.innerHTML += '<div>Warning!!!</div>'
//     }
//     console.log(p.outerHTML)
// })

// header1.textContent = "<em>Hello</em>"

// console.log( header1.textContent )
// console.log( header1.innerText )

// const ele = document.querySelector('#par')
// ele.hidden = false

console.log( list.firstElementChild )
console.log( list.firstElementChild.getAttribute('hello') )
list.firstElementChild.setAttribute('heLLo', 'world')
console.log( list.firstElementChild.getAttribute('hello') )
// list.firstElementChild.removeAttribute('hello')
console.log( list.firstElementChild.attributes)