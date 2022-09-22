const menu = document.querySelector('#menu');

const menu_bar = document.querySelector('#menu-bar')

menu_bar.addEventListener('click', () => {

  menu.classList.toggle('menu-toggle');

});