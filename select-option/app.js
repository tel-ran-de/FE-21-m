const selector = document.querySelector('#select-id');
const result = document.querySelector('#res');

const person = [
    {id: 1, name: "Ivan 1"},
    {id: 2, name: "Ivan 2"},
    {id: 3, name: "Ivan 3"},
    {id: 4, name: "Ivan 4"},
    {id: 5, name: "Ivan 5"},
    {id: 6, name: "Ivan 6"},
];

selector.innerHTML += person.map(p => `<option value="${p.id}">${p.name}</option>`).join("\n");

selector.addEventListener('change', (event) => {
    result.textContent = event.target.value;
});