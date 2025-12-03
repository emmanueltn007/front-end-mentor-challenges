const openMenuBtn = document.querySelector('#menu-btn');
const closeMenuBtn = document.querySelector('#close-menu-btn');
const hiddenMenu = document.querySelector('#hidden-menu');

// OPEN AND CLOSE MENU SECTION
function showMenu () {
    hiddenMenu.style.display = 'block';
}

function hideMenu () {
    hiddenMenu.style.display = 'none';
}

openMenuBtn.addEventListener('click', () => {
    showMenu();
    openMenuBtn.style.display = 'none';
    closeMenuBtn.style.display = 'block';
});

closeMenuBtn.addEventListener('click', () => {
    hideMenu();
    openMenuBtn.style.display = 'block';
    closeMenuBtn.style.display = 'none';
});
