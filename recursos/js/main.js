// Formulario
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("¡Gracias por tu mensaje, Jennifer lo recibirá pronto!");
    form.reset();
  });
}

// Mostrar proyectos al hacer scroll
const projects = document.querySelectorAll('.project');
const showOnScroll = () => {
  projects.forEach(project => {
    const rect = project.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      project.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);

// Botón "Ir arriba"
const btnTop = document.getElementById("btn-top");
if (btnTop) {
  window.addEventListener("scroll", () => {
    btnTop.style.display = window.scrollY > 300 ? "block" : "none";
  });

  btnTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Carrusel de proyectos
const carousel = document.querySelector('.carousel');
const btnNext = document.querySelector('.carousel-btn.next');
const btnPrev = document.querySelector('.carousel-btn.prev');

if (carousel && btnNext && btnPrev) {
  btnNext.addEventListener('click', () => {
    carousel.scrollBy({ left: 320, behavior: 'smooth' });
  });

  btnPrev.addEventListener('click', () => {
    carousel.scrollBy({ left: -320, behavior: 'smooth' });
  });
}
