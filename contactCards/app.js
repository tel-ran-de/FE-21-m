const persons = [
    {
        fName: 'John',
        lName: 'Smith',
        age: 39,
        phone: '555-555-000',
        address: {
            line: '123, John Street',
            city: 'New York',
            country: 'United States'
        },
        email: 'john@example.com'
    },
    {
        fName: 'Mary',
        lName: 'Smith',
        phone: '555-555-111',
        address: {
            line: '123, John Street',
            city: 'New York',
            country: 'United States'
        },
        email: 'mary@example.com'
    },
    {
        fName: 'Ivan',
        lName: 'Ivanoff',
        phone: '+7-812-123-45-67',
        address: {
            line: '1, Nevskiy prospekt',
            city: 'Saint Petersburg',
            country: 'Russian Federation'
        },
        email: 'ag008@kgb.ru'
    },
]

const box = document.querySelector('#app')

const fullName = document.querySelector('#fullName')
const age = document.querySelector('#age')
const addressLine = document.querySelector('#addressLine')
const addressCity = document.querySelector('#addressCity')
const addressCountry = document.querySelector('#addressCountry')
const email = document.querySelector('#email')
const phone = document.querySelector('#phone')

const btn = document.querySelector('#addPerson')
const btnClear = document.querySelector('#clear')
const btnDefault = document.querySelector('#btnDefault')
const form = document.querySelector('#addPersonForm')

const clearForm = () => {
    fullName.value = ''
    age.value = ''
    addressLine.value = ''
    addressCity.value = ''
    addressCountry.value = ''
    email.value = ''
    phone.value = ''
}


const renderPerson = person => {
    const rootElement = document.createElement('div')
    rootElement.className = 'card col mx-1'

    // const age = '(' + person.age + ')'
    // const age1 = `(${person.age})`


    rootElement.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${person.fName} ${person.lName} ${person.age ? '('+ person.age +')' : ''}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${person.email}</h6>
                    <p class="card-text">
                        ${person.address.line}, ${person.address.city}, ${person.address.country}
                    </p>
                    <p class="card-text">
                        Phone: ${person.phone}
                    </p>
                </div>`

    box.append(rootElement)
}

persons.forEach(person => {
    renderPerson(person)
})



// btn.addEventListener('click', (event) => {
form.addEventListener('submit', (event) => {
    event.preventDefault()
    const nameArray = fullName.value.split(" ")

    const person = {
        fName: nameArray[0],
        lName: nameArray[1],
        age: age.value.trim() ? +age.value : null,
        phone: phone.value,
        address: {
            line: addressLine.value,
            city: addressCity.value,
            country: addressCountry.value
        },
        email: email.value
    }
    clearForm()
    renderPerson(person)
} )

btnClear.addEventListener('click', event => {
    event.preventDefault()
    clearForm()
})

btnDefault.addEventListener('click', event => {
    event.preventDefault()
    fullName.value = persons[0].fName + ' ' + persons[0].lName
    age.value = persons[0].age
    addressLine.value = persons[0].address.line
    addressCity.value = persons[0].address.city
    addressCountry.value = persons[0].address.country
    email.value = persons[0].email
    phone.value = persons[0].phone
})