class Person {
    constructor(fullName, phone, email, fullAddress) {
        const name = fullName.split(' ');
        const address = fullAddress.split(',');
        this.id = Date.now();
        this.fName = name[0];
        this.lName = name[1];
        this.email = email;
        this.phone = phone;
        this.city = address[0];
        this.addressLine = address[1];
    }
    getShortName() { return this.lName + " " + this.fName[0] + "."; }
    getPhoneString() {
        return `<div class="phone"><strong>Phone number:</strong>${this.phone}</div>`
    }
    getPersonAsHTML() { return `
    <div class="full-name">${this.fName} ${this.lName}</div>
    ${this.getPhoneString()}
    <div class="email">${this.email}</div>
    <div class="address"><span class="city">${this.city}</span>, <span class="address-line">${this.addressLine}</span>  </div>
    `}
}

let persons = [];

const form = document.querySelector('#new-contact');
const fullName = document.querySelector('#full-name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const address = document.querySelector('#address');

const personList = document.querySelector('#person-list');
const card = document.querySelector('#app');

form.addEventListener('submit', event => {
    event.preventDefault();

    persons.push(
        new Person(fullName.value, phone.value, email.value, address.value)
    )
    renderList()
})

const renderList = () => {
    personList.innerHTML = '';
    persons.forEach( (person) => {
        const ele = document.createElement('li');
        ele.className = 'person-list';
        ele.textContent = person.getShortName();

        const btnShow = document.createElement('button');
        btnShow.textContent = 'Show Info';
        btnShow.addEventListener('click', () => {choosePerson(person.id)})
        ele.append(btnShow)

        const btnDelete = document.createElement('button');
        btnDelete.textContent = 'Delete';
        btnDelete.addEventListener('click', () => {deletePerson(person.id)})
        ele.append(btnDelete)
        personList.append(ele);
    } )
}

const choosePerson = personId => {
    const person = persons.find(p => p.id === personId);
    if (!person) {
        return false;
    }
    card.innerHTML = person.getPersonAsHTML();
}

const deletePerson = personId => {
    persons = persons.filter(person => person.id !== personId);
    renderList();
}