const dayInput = document.querySelector('#day-input');
const daysAlert = document.querySelector('#js-days-alert');
const monthInput = document.querySelector('#month-input');
const monthsAlert = document.querySelector('#js-months-alert');
const yearInput = document.querySelector('#year-input');
const yearsAlert = document.querySelector('#js-year-alert');
const submitBtn = document.querySelector('#js-button');
const userYearsEl = document.querySelector('#js-user-years');
const userMonthsEl = document.querySelector('#js-user-months');

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1;
const currentDay  = new Date().getDate();

// FUNCTIONS
function validations () {
    let valid = true;
    // CONDITIONS FOR YEARS
    if (yearInput.value === '') {
        yearsAlert.textContent = 'This field is required';
        valid = false;
    }
    else if (yearInput.value > currentYear) {
        yearsAlert.textContent = 'Must be in the past';
        valid = false;
    }
    else {
        yearsAlert.textContent = '';
    }

    // CONDITIONS FOR MONTHS 
    if (monthInput.value === '') {
        monthsAlert.textContent = 'This field is required';
        valid = false;
    }
    else if (monthInput.value < 1 || monthInput.value > 12) {
        monthsAlert.textContent = 'Must be a valid month';
        valid = false;
    }
    else {
        monthsAlert.textContent = '';
    }

    // CONDITIONS FOR DAYS  
    if (dayInput.value === '') {
        daysAlert.textContent = 'This field is required';
        valid = false;
    }
    else if (dayInput.value < 1 || dayInput.value > 31) {
        daysAlert.textContent = 'Must be a valid date';
        valid = false;
    }
    else {
        daysAlert.textContent = '';
    }

    return valid;
}

// AGE CALCULATION
function calculateAge () {
    const userDayInput = parseFloat(dayInput.value);
    const userMonthInput = parseFloat(monthInput.value);
    const userYearInput = parseFloat(yearInput.value);

    let years = currentYear - userYearInput;
    let months = (currentYear - userYearInput) * 12 + currentMonth - userMonthInput -12; 
    let monthsPassed = months % 12;
    let daysPassed = 

    if (currentMonth < userMonthInput) {
        years--;
    }

    if (currentDay >= userDayInput) {
        monthsPassed++;
    }

    userYearsEl.textContent = years;
    userMonthsEl.textContent = monthsPassed;
    userDaysEl.textContent = daysPassed;
}

submitBtn.addEventListener('click', () => {
    validations();
    calculateAge();
});