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