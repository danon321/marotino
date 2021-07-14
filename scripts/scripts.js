const menu = document.querySelector('.hamburger'); 
const body = document.getElementsByTagName("body")[0];
menu.addEventListener('click', () => { 
  
  menu.classList.toggle('hamburger--active');
  // $('.header__nav--menu,.header__nav > .button').toggle('slow') 
  document.querySelector('.header__nav-wrapper').classList.toggle('header__nav-wrapper-mobile');
  document.querySelector('.header__nav--mobile').classList.toggle('header__nav--mobile-active');
  if(document.querySelector('.header__nav--mobile-active') != null){
    body.style.overflow="hidden";
  }else{body.removeAttribute("style")}
});
  window.addEventListener("resize", function(){
    if(screen.width>=1024){
      document.querySelector(".header__nav--mobile").classList.remove("header__nav--mobile-active");
      document.querySelector(".header__nav-wrapper").classList.remove("header__nav-wrapper-mobile");
      document.querySelector(".hamburger").classList.remove("hamburger--active");
      body.removeAttribute("style");
    }   
  });
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
  if (prevScrollpos < currentScrollPos) {
    $('.header__nav-wrapper').addClass('header__nav--scrol');
  } else {
    $('.header__nav-wrapper').removeClass('header__nav--scrol');
  }
  prevScrollpos = currentScrollPos;
  let tranformMobileMenu = 150 ; 
if(screen.width<1024){
  tranformMobileMenu = 50;
  } else{ tranformMobileMenu = 150; }
  if (document.body.scrollTop > tranformMobileMenu || document.documentElement.scrollTop > tranformMobileMenu) { 
    $('.header__nav-wrapper').addClass('header__nav--scrol-bgcolor');
    $('.header__nav--menu-element').css("color","black");
    document.querySelector('.menu__button').classList.add('menu__button--scrol');
    $('.hamburger__bars').addClass('hamburger__bars--scrol');
  } else {
    $('.header__nav-wrapper').removeClass('header__nav--scrol-bgcolor');
    $('.header__nav--menu-element').css("color","white");
    $('.menu__button').removeClass('menu__button--scrol');
    $('.hamburger__bars').removeClass('hamburger__bars--scrol');
  }
}

// document.getElementById("background-video").pause();