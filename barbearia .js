document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("menuMobile");
    const btnHamburguer = document.getElementById("hamburguerButton");

    btnHamburguer.addEventListener("click", () => {
        // Alterna a exibição do menu
        if (menu.style.display === "flex") {
            menu.style.display = "none";
        } else {
            menu.style.display = "flex";
            menu.style.flexDirection = "column"; // Estilo vertical para mobile
            menu.style.backgroundColor = "#2b2829";
            menu.style.position = "absolute";
            menu.style.top = "100px";
            menu.style.right = "10px";
            menu.style.padding = "1em";
            menu.style.borderRadius = "10px";
        }
    });
});

// Fecha o menu mobile ao clicar em um link
menuMobile?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menuMobile.classList.remove('show');
  });
});

// ===== SCROLL SUAVE PARA ÂNCORAS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ===== ANIMAÇÃO AO ROLAR (FADE-IN) =====
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, {
  threshold: 0.1
});

// Aplica animação às seções
document.querySelectorAll('section').forEach(section => {
  section.classList.add('hidden');
  observer.observe(section);
});