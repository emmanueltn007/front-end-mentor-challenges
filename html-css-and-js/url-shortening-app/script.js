// OPEN AND CLOSE MENU SECTION
const openMenuBtn = document.querySelector('#menu-btn');
const closeMenuBtn = document.querySelector('#close-menu-btn');
const hiddenMenu = document.querySelector('#hidden-menu');


openMenuBtn.addEventListener('click', () => {
    hiddenMenu.style.display = 'block';
    openMenuBtn.style.display = 'none';
    closeMenuBtn.style.display = 'block';
});

closeMenuBtn.addEventListener('click', () => {
    hiddenMenu.style.display = 'none';
    openMenuBtn.style.display = 'block';
    closeMenuBtn.style.display = 'none';
});

// INPUT SECTION
const inputLink = document.querySelector('#js-input-link')
const shortenLinkBtn = document.querySelector('#js-shorten-link-btn');
const alertMessage = document.querySelector('#js-message-alert');

shortenLinkBtn.addEventListener('click', () => {
    const userInput = inputLink.value;
    const validUrl = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

    // EMPTY FIELD ERROR
    if (userInput.trim() === '') {
        alertMessage.textContent = 'Please add a link';
        //inputLink.style.borderColor = 'red';
        return;
    }

    // INVALID URL ERROR
    if (!validUrl.test(userInput.trim())) {
        alertMessage.textContent = 'Please add a valid url';
        //inputLink.style.borderColor = 'red';
        return
    }

    // PASSED VALIDATION
    alertMessage.textContent = '';
    inputLink.style.borderColor = '';
});

// API SECTION

shortenLinkBtn.addEventListener('click', () => {
    const apiUrl = 'https://cleanuri.com/api/v1/shorten';

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify({
            url: inputLink.value
        })    
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => console.error(err));
})
