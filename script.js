const iconMenu = document.querySelector('.menu__icon');
if (iconMenu){
    const menuBody = document.querySelector('.menu__body');
    const langMob = document.querySelector('.lang__mob')
    const body = document.querySelector('body')
    iconMenu.addEventListener("click", function(e) {
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
        langMob.classList.toggle('active');
        body.classList.toggle('lock');
    })
}
