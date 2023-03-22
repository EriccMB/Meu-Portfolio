function mobileMenu() {
    let mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu.classList.contains('open')){
        mobileMenu.classList.remove('open')
        document.querySelector('#mobile-menu-button').src="img/mobile-menu-icon-closed.png"
    } else {
        mobileMenu.classList.add('open')
        document.querySelector('#mobile-menu-button').src="img/mobile-menu-icon-opened.png"
    }
}

window.sr = ScrollReveal({distance: '30px',
easing: 'ease-out', reset:false});

sr.reveal('.img-box-home',{
    origin:'left',
    duration: 800
});

sr.reveal('.text-box-home', {
    origin: 'right',
    duration: 800
});

sr.reveal('.text-box-about-me', {
    origin: 'right',
    duration:800
})

sr.reveal('.img-box-about-me',{
    origin:'left',
    duration: 500
});

sr.reveal('.title-box-skills',{
    origin:'top',
     duration: 500
});

sr.reveal('.logo-box', {
    duration: 900
});

sr.reveal('.two',{
    origin:'bottom'
});

sr.reveal('.one', {
    origin: 'top'
});

sr.reveal('.title-box-contact', {
    origin:'top',
    duration:500
});

sr.reveal('.social-medias-box-contact', {
    origin: 'bottom',
    duration: 900
})
