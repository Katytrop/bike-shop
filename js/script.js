function ibg(){
    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if(ibg[i].querySelector('img')){
            ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
        }
    }
}   
ibg();

function toggleMenu() {
    const menu = document.querySelector('.icon-menu');
    const bodyMenu = document.querySelector('.menu__body');
    menu.addEventListener('click', () => {
        bodyMenu.classList.toggle('active');
        menu.classList.toggle('active');
    })
}
toggleMenu();

// button up

const btnUp = document.querySelector('.pageup');

function trackScroll() {
    const scrolled = window.pageYOffset;
    const coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      btnUp.classList.add('pageup_show');
    }
    if (scrolled < coords) {
      btnUp.classList.remove('pageup_show');
    }
}
function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
}

window.addEventListener ('scroll', trackScroll);
btnUp.addEventListener ('click', backToTop);
