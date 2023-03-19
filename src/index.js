const currentUrl = window.location.href;
const headerLinks = document.querySelectorAll('.header__link');

headerLinks.forEach((link) => {
  if (link.href === currentUrl) {
    link.classList.add('active');
  }
});

const body = document.body;
const header = document.querySelector('.header');
const headerList = document.querySelector('.header__list');
const menuToggle = document.querySelector('.header__menuToggle');

menuToggle.addEventListener('click', () => {
  headerList.classList.toggle('open');
  body.classList.toggle('no-scroll');
});

window.addEventListener('resize', () => {
  const viewportWidth =
    window.innerWidth || document.documentElement.clientWidth;

  if (viewportWidth >= 700) {
    headerList.classList.remove('open');
    body.classList.remove('no-scroll');
  }
});
