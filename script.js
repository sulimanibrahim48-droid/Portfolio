const slides = [...document.querySelectorAll('.slide')];
const currentSlide = document.querySelector('.current-slide');
const progress = document.querySelector('.status-line i');
let index = 0;

function showSlide(nextIndex) {
  index = (nextIndex + slides.length) % slides.length;
  slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
  currentSlide.textContent = String(index + 1).padStart(2, '0');
  progress.style.width = `${((index + 1) / slides.length) * 100}%`;
}

document.querySelector('.next').addEventListener('click', () => showSlide(index + 1));
document.querySelector('.previous').addEventListener('click', () => showSlide(index - 1));

const slider = document.querySelector('.project-slider');
let autoSlide = setInterval(() => showSlide(index + 1), 5000);
function pauseAutoSlide() { clearInterval(autoSlide); }
function resumeAutoSlide() { pauseAutoSlide(); autoSlide = setInterval(() => showSlide(index + 1), 5000); }
slider.addEventListener('mouseenter', pauseAutoSlide);
slider.addEventListener('mouseleave', resumeAutoSlide);
document.querySelectorAll('.slider-button').forEach(button => button.addEventListener('click', resumeAutoSlide));

const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.site-nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', open);
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
