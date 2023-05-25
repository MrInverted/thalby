const burgerBlock = document.querySelector('.burger');
const burgerTrigger = document.querySelector('.burger__trigger');
const burgerNav = document.querySelector('.burger__nav');

const delay = () => setTimeout(showBurgerNav, 500);

burgerTrigger.addEventListener('click', showBurgerNav);
burgerNav.addEventListener('click', delay);

function showBurgerNav() {
    burgerNav.classList.toggle('active');
}

AOS.init()
