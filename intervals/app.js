const box = document.querySelector('.box');
const btn = document.querySelector('#btn');
const timeBox = document.querySelector('.time');
const stopTime = document.querySelector('#stop-time');

const workWithBox = () => {
    box.classList.toggle('hide');
}

btn.addEventListener('click', () => {
    setTimeout( () => {
        workWithBox()
    }, 1000 )
})

const timer = setInterval(() => {
    timeBox.textContent = new Date().toString();
}, 1000);

stopTime.addEventListener('click', () => {
    clearInterval(timer);
})