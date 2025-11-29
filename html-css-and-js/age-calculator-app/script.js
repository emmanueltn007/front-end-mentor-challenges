const dayInput = document.querySelector('#day-input');
const daysAlert = document.querySelector('#js-days-alert');
const monthInput = document.querySelector('#month-input');
const monthsAlert = document.querySelector('#js-months-alert');
const yearInput = document.querySelector('#year-input');
const yearsAlert = document.querySelector('#js-year-alert');
const submitBtn = document.querySelector('#js-button');
const userYears = document.querySelector('#js-user-years');
const userMonths = document.querySelector('#js-user-months');

function calculateAge () {
    let userAge = null;

    const userDayInput = parseFloat(dayInput.value);
    const userMonthInput = parseFloat(monthInput.value);
    const userYearInput = parseFloat(yearInput.value);
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDay  = new Date().getDay();

    // Calculations
    const age = currentYear - userYearInput;
    const userCurrentMonths = 12 - userMonthInput; 

    // Conditions
    if (currentMonth < userMonthInput) {
        userYears.textContent = age - 1;
    }
    else {
       userYears.textContent = age;
    }

    if (userMonthInput > 12 || userMonthInput < 1) {
        console.log('Please Enter A Valid Month');
        return;
    }

    if (dayInput.value === '' || monthInput.value === '' || yearInput === '') {
        yearsAlert.textContent = 'This field is required';
        monthsAlert.textContent = 'This field is required';
        daysAlert.textContent = 'This field is required';
    }
    else {
        yearsAlert.textContent = '';
        monthsAlert.textContent = '';
        daysAlert.textContent = '';
    }
}

submitBtn.addEventListener('click', () => {
    calculateAge();
});