const hamBtn = document.querySelector('.header-nav-hamburger-icon');
const hamMenu = document.querySelector('#header-nav-hamburger-menu')
const menu = document.querySelector('#menu');
hamBtn.addEventListener('click', function () {
  hamMenu.style.display = "block";
});

const headerNavMenu = document.querySelector('.header-nav-menu'); // 햄버거 버튼 출력 전 pc 규격 nav바
const hamCloseBtn = document.querySelector('.header-nav-hamburger-close-icon');
hamCloseBtn.addEventListener('click', function () {
  // hamBtn.style.display = "block";
  hamMenu.style.display = "none";
})