
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
    if (search.classList.contains('search-form-active')) {
        alert('searching');
    } else {
        search.classList.toggle('search-form-active');
        sInput.focus();
    }
}

function deactivateSearch() {
    const search = document.querySelector('.search-form-active');
    search.classList.toggle('search-form-active');

}
// const search = document.querySelector('.header__search-form');
// const sBtn = document.querySelector('.header__search-btn');
// const sInput = document.querySelector('.header__search-input');
// const sBtnClose = document.querySelector('.header__close-search-btn');



// sBtn.onclick = function () {
//     search.classList.add('search-form-active');
//     sInput.focus();
//     console.log('добавили класс?');
//     console.log(search.classList.length);
// }
    
// sBtnClose.onclick = function () {
//     search.classList.remove('search-form-active');
//     console.log('убрали класс?');
//     console.log(search.classList.length);
//     }

