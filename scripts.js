document.querySelector('.menubtn').onclick = function (e) {
    var menubtn = document.querySelector('.menubtn');
    var menu = document.querySelector('.menu');
    var header = document.querySelector('.header')
    var headermark = document.querySelector('.headermark')
  
    menubtn.classList.toggle('is-active');
    menu.classList.toggle('is-active');
    header.classList.toggle('is-active');
    headermark.classList.toggle('is-active');
  
    e.preventDefault();
  }