const dayInput = document.querySelector('#day-input');
const daysAlert = document.querySelector('#js-days-alert');
const monthInput = document.querySelector('#month-input');
const monthsAlert = document.querySelector('#js-months-alert');
const yearInput = document.querySelector('#year-input');
const yearsAlert = document.querySelector('#js-year-alert');
const submitBtn = document.querySelector('#js-button');
const userYearsEl = document.querySelector('#js-user-years');
const userMonthsEl = document.querySelector('#js-user-months');
const userDaysEl = document.querySelector('#js-user-days');

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
    let months = currentMonth -userMonthInput;
    let days = currentDay -userDayInput;

    // fix the months if negative
    if (months < 0) {
        years--;
        months += 12;
    }

    // fix the days if negative
    if (days < 0) {
        months += daysInPreviousMonth;
    }

    // Getting last month's number of days
    const previousMonth = currentMonth === 1 ? 12 :currentMonth - 1;
    const previousYear = currentMonth === 1 ? currentYear -1 : currentYear;
    const daysInPreviousMonth = new Date(previousYear, previousMonth, 0).getDate();

    userYearsEl.textContent = years;
    userMonthsEl.textContent = months;
    userDaysEl.textContent = days;
}

submitBtn.addEventListener('click', () => {
    validations();
    calculateAge();
});