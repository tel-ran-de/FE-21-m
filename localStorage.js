const form = document.querySelector('form')
const fieldName = document.querySelector('#name')
const fieldAge = document.querySelector('#age')
const listBox = document.querySelector('#list-name')
const alertBox = document.querySelector('.alert')

let names = [];

form.addEventListener('submit', event => {
    event.preventDefault();
    names.push({name: fieldName.value, age: fieldAge.value});
    renderNames();
    fieldName.value = '';
    fieldAge.value = '';
    localStorage.setItem('names', JSON.stringify(names));
    alertBox.classList.add('show');
    setTimeout(() => {
        alertBox.classList.remove('show');
    }, 1500)
})

const renderNames = () => {
    listBox.innerHTML = names.map(name => `<li>${name.name}, (${name.age})</li>`).join('\n');
}

const fillNames = () => {
    names = JSON.parse(localStorage.getItem('names'));
    renderNames()
}

fillNames()