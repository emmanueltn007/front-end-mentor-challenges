const locationInput = document.querySelector('.js-location-input');
const locationDisplay = document.querySelector('.js-location');
const weatherStatus = document.querySelector('.js-weather-status');
const weatherImageDisplay = document.querySelector('.js-weather-image');
const currentTimeDisplay = document.querySelector('.js-current-time');
const todaysDate = document.querySelector('.js-todays-date');
const searchButton = document.querySelector('.js-search-btn');

// DATE AND TIME SECTION
const now = new Date();
const months = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"]

const month = months[now.getMonth()];
const day = String(now.getDate()).padStart(2, '0');
const year = now.getFullYear();

const currentDate = `${day} ${month} ${year}`;

const hours = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');
const seconds = String(now.getSeconds()).padStart(2, '0');

const currentTime = `${hours}:${minutes}:${seconds}`;

currentTimeDisplay.textContent = `${currentTime}`
todaysDate.textContent = `${currentDate}`;

// FETCHING API SECTION
searchButton.addEventListener('click', () => {
    let userLocationInput = locationInput.value;

    const APIkey = '6e06bb76f7254766b48140714252611';
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${APIkey}&q=${userLocationInput}`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            locationDisplay.textContent = `${data.location.region}, ${data.location.name}`;
            weatherStatus.textContent = `${data.current.condition.text}`;
            weatherImageDisplay.innerHTML = `<img style="width: 100px" src="https:${data.current.condition.icon}" alt="weather-icon">`;
        });
});