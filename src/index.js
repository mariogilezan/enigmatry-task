// Base variables
const body = document.body;
const currentUrl = window.location.href;

// Header variables
const headerLinks = document.querySelectorAll('.header__link');
const header = document.querySelector('.header');
const headerList = document.querySelector('.header__list');
const menuToggle = document.querySelector('.header__menuToggle');

// Overlay variables
const overlay = document.querySelector('.overlay');
const overlayContact = document.querySelector('.overlay__contact');
const closeOverlayBtn = document.querySelector('.overlay__close');
const cancelOverlayBtn = document.querySelector('.overlay__btn--cancel');

// Handle active navigation link
headerLinks.forEach((link) => {
  if (link.href === currentUrl) {
    link.classList.add('active');
  }
});

// Toggle mobile menu
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

// Load overlay on page load
window.addEventListener('load', () => {
  setTimeout(() => {
    overlay.style.opacity = 1;
    overlay.style.visibility = 'visible';
    overlay.style.transition = 'all 1s ease-out';
    overlayContact.style.transform = 'translateY(0)';
    overlayContact.style.transition = 'transform 2s ease-out';
  }, 1000);
});

// Handle close overlay
[closeOverlayBtn, cancelOverlayBtn].forEach((btn) => {
  btn.addEventListener('click', () => {
    overlay.style.opacity = 0;
    overlay.style.visibility = 'hidden';
    overlay.style.transition = 'all 1s ease-in';
    overlayContact.style.transform = 'translateY(-200%)';
    overlayContact.style.transition = 'transform 1s ease-in';
  });
});
