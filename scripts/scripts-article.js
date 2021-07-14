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
  // body.classList.toggle("menu__mobile--overflow")
});
  window.addEventListener("resize", function(){
    if(screen.width>=1024){
      document.querySelector(".header__nav-wrapper").classList.remove("header__nav-wrapper-mobile");
      document.querySelector(".header__nav--mobile").classList.remove("header__nav--mobile-active");
      document.querySelector(".hamburger").classList.remove("hamburger--active");
      body.removeAttribute("style")
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
  
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) { 
    $('.header__nav-wrapper').addClass('header__nav--scrol-bgcolor');
    $('.header__nav--menu-element').css("color","black");
    $('.menu__button').addClass('menu__button--scrol');
  } else {
    $('.header__nav-wrapper').removeClass('header__nav--scrol-bgcolor');
   
    $('.menu__button').removeClass('menu__button--scrol');
  }
}

// document.getElementById("background-video").pause();