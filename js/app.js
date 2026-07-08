const toggle = document.getElementById('theme-toggle');

/* ============================
   LOAD SAVED THEME
   ============================ */
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  document.body.classList.add('light');
}

/* ============================
   SET INITIAL BUTTON TEXT
   ============================ */
const isLightInitial = document.body.classList.contains('light');
toggle.textContent = isLightInitial
  ? '\u{1F319} Dark Mode'
  : '\u2600 Light Mode';

/* ============================
   TOGGLE THEME
   ============================ */
toggle.addEventListener('click', () => {
  const isLight = document.body.classList.toggle('light');

  localStorage.setItem('theme', isLight ? 'light' : 'dark');

  toggle.textContent = isLight
    ? '\u{1F319} Dark Mode'
    : '\u2600 Light Mode';

  document.documentElement.style.transition = "background-color 0.3s ease, color 0.3s ease";

});

/* ============================
   SCROLL REVEAL ANIMATIONS
   ============================ */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-in, .slide-up').forEach(el => {
  observer.observe(el);
});

/* ============================
   SCROLL TO TOP BUTTON
   ============================ */
const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const form = document.querySelector('.contact-form');

if (!form) {
  console.error("Contact form not found.");
} else {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Your message has been submitted!");
    form.reset();
  });
}


