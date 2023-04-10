
var acc = document.getElementsByClassName("FAQ__accordion-btn");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
        this.classList.toggle('acc_btn_active');
        
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }
}
        
// -----------

function activateSearch() {
    const search = document.querySelector('.header__search-form');
    const sInput = document.querySelector('.header__search-input');
    const logo = document.querySelector('.header__logo-link');
    const burger = document.querySelector('.header__burger');
    if (search.classList.contains('search-form-active')) {
        alert('searching');
    } else {
        logo.classList.toggle('hidden');
        burger.classList.toggle('hidden');
        search.classList.toggle('search-form-active');
        sInput.focus();
    }
}

function deactivateSearch() {
    const search = document.querySelector('.search-form-active');
    const logo = document.querySelector('.header__logo-link');
    const burger = document.querySelector('.header__burger');
    logo.classList.toggle('hidden');
    burger.classList.toggle('hidden');
        
    search.classList.toggle('search-form-active');

}

function activateBurger(element) {
    let menuBtn = element;
    let nav = document.querySelector('.header__nav');
    menuBtn.classList.toggle('burger_active');
    nav.classList.toggle('nav_active');
}
