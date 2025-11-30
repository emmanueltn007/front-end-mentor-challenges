const dayInput = document.querySelector('#day-input');
const daysAlert = document.querySelector('#js-days-alert');
const monthInput = document.querySelector('#month-input');
const monthsAlert = document.querySelector('#js-months-alert');
const yearInput = document.querySelector('#year-input');
const yearsAlert = document.querySelector('#js-year-alert');
const submitBtn = document.querySelector('#js-button');
const userYearsEl = document.querySelector('#js-user-years');
const userMonthsEl = document.querySelector('#js-user-months');

let userAge = null;
let userMonths = null;

const userDayInput = parseFloat(dayInput.value);
const userMonthInput = parseFloat(monthInput.value);
const userYearInput = parseFloat(yearInput.value);
const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1;
const currentDay  = new Date().getDate();

// CALCULATIONS
const age = currentYear - userYearInput;
const userCurrentMonths = 12 - userMonthInput; 

// FUNCTIONS
function validations () {
    // CONDITIONS FOR YEARS
    if (yearInput.value > currentYear) {
        yearsAlert.textContent = 'Must be in the past';
    }
    else if (yearInput.value === '') {
        yearsAlert.textContent = 'This field is required';
    }
    else {
        yearsAlert.textContent = '';
    }

    // CONDITIONS FOR MONTHS 
    if (monthInput.value > 12 || monthInput.value < 1) {
        monthsAlert.textContent = 'Must be a valid month';
    }
    else if (monthInput.value === '') {
        monthsAlert.textContent = 'This field is required';
    }
    else {
        monthsAlert.textContent = '';
    }

    // CONDITIONS FOR DAYS  
    if (dayInput.value < 1 || dayInput.value > 31) {
        daysAlert.textContent = 'Must be a valid date';
    }
    else if (dayInput.value === '') {
        daysAlert.textContent = 'This field is required';
    }
    else {
        daysAlert.textContent = '';
    }
}

function calculateAge () {
    userYearsEl.textContent = age;
}

calculateAge();

submitBtn.addEventListener('click', () => {
    validations();
    calculateAge();
});