const locationInput = document.querySelector('.js-location-input');
const locationDisplay = document.querySelector('.js-location');
const weatherStatus = document.querySelector('.js-weather-status');
const currentTemperature = document.querySelector('.js-current-temp')
const currentTimeDisplay = document.querySelector('.js-current-time');
const todaysDate = document.querySelector('.js-todays-date');
const dayAfterTommorowDate = document.querySelector('.js-day-after-tommorow-date');
const searchButton = document.querySelector('.js-search-btn');
const dateDisplayForecast = document.querySelectorAll('.js-date-forecast');
const weatherStatusForecast = document.querySelectorAll('.js-weather-status-forecast');
const weatherImageForecast = document.querySelectorAll('.js-weather-image-forecast');
const messageAlert = document.querySelector('.js-message-alert');

// WEATHER ICON
const todaysWeatherImage = document.querySelector('.js-todays-weather-image');
const weatherImageDisplay = document.querySelectorAll('.js-weather-image-forecast');

// MIN & MAX TEMPS
const minTemp = document.querySelectorAll('.js-min-temp-forecast');
const maxTemp = document.querySelectorAll('.js-max-temp-forecast');

// DATE AND TIME SECTION
const now = new Date();
const months = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"]
const daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

const month = months[now.getMonth()];
const day = String(now.getDate()).padStart(2, '0');
const year = now.getFullYear();
const dayAfterTommorrow = daysOfTheWeek[(now.getDay() + 1) % 7];

const currentDate = `${day} ${month} ${year}`;

const hours = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');
const seconds = String(now.getSeconds()).padStart(2, '0');

const currentTime = `${hours}:${minutes}:${seconds}`;

currentTimeDisplay.textContent = `${currentTime}`
todaysDate.textContent = `${currentDate}`;
dayAfterTommorowDate.textContent = dayAfterTommorrow;

// FETCHING API SECTION
searchButton.addEventListener('click', async() => {
    try {
        let userLocationInput = locationInput.value;

        if (userLocationInput === '') {
            messageAlert.textContent = 'Please a enter a valid location...';
            return;
        }

        const APIkey = '6e06bb76f7254766b48140714252611';
        const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${APIkey}&q=${userLocationInput}&days=3`;
        const res = await fetch(apiUrl);
        const data = await res.json();

        // CURRENT WEATHER
        locationDisplay.textContent = `${data.location.region}, ${data.location.name}`;
        weatherStatus.textContent = `${data.current.condition.text}`;
        todaysWeatherImage.innerHTML = `<img style="width: 100px" src="https:${data.current.condition.icon}" alt="weather-icon">`;
        currentTemperature.textContent = `${data.current.temp_c}℃`;

        // fORECAST
        data.forecast.forecastday.forEach((forecastDay, index) => {
            if (weatherImageDisplay[index]) {
                weatherImageDisplay[index].innerHTML = `<img style="width: 30px" src="https:${forecastDay.day.condition.icon}" alt="weather-icon">`;
            }

            if (minTemp[index]) {
                minTemp[index].textContent = `${forecastDay.day.mintemp_c}℃`;
            }
            
            if (maxTemp[index]) {
                maxTemp[index].textContent = `${forecastDay.day.maxtemp_c}℃`;
            }
        });
    }
    catch {
        console.log("Oops looks like we've encountered an error!");
    }    
});