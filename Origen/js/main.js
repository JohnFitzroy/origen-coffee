// 1. Navbar: agrega clase .scrolled al hacer scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar?.classList.toggle('scrolled', window.scrollY > 60);
});

// 2. Animación de entrada para elementos con .fade-up y .historia__event
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-up, .historia__event').forEach(el => {
  observer.observe(el);
});

// 3. Marcar link activo en la navbar según la página actual
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.navbar__links a').forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});

// 4. Menú hamburguesa
const burger = document.querySelector('.navbar__burger');
const navLinks = document.querySelector('.navbar__links');

burger?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  burger.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
});

// Cerrar menú al hacer click en un link
document.querySelectorAll('.navbar__links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    burger.textContent = '☰';
  });
});
