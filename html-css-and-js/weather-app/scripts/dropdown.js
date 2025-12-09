// UNITS DROPDOWN MENU
const unitDropdownBtn = document.querySelector('#js-units-dropdown');
const hiddenUnitsMenu = document.querySelector('#js-hidden-units-menu');

unitDropdownBtn.addEventListener('click', () => {
    if (hiddenUnitsMenu.style.display === 'block') {
        hiddenUnitsMenu.style.display = 'none';
    }
    else {
        hiddenUnitsMenu.style.display = 'block';
    }
})

// DAY SELECTION DROPDOWN MENU
const daySelectionDropdownBtn = document.querySelector('#js-day-selection-dropdown-menu');
const hiddenSelectionDropdownMenu = document.querySelector('#js-hidden-day-selection-dropdown-menu');

daySelectionDropdownBtn.addEventListener('click', () => {
    if (hiddenSelectionDropdownMenu.style.display === 'block') {
        hiddenSelectionDropdownMenu.style.display = 'none';
    }
    else {
        hiddenSelectionDropdownMenu.style.display = 'block';
    }
})
