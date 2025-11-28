const adviceId = document.querySelector('#advice-id');
const advice = document.querySelector('#advice');
const button = document.querySelector('#button');

button.addEventListener('click', () => {
    fetch(`https://api.adviceslip.com/advice?timestamp=${Date.now()}`)
    .then(response => response.json())
    .then(data => {
        adviceId.textContent = data.slip.id;
        advice.textContent = `"${data.slip.advice}"`;
    });         
});