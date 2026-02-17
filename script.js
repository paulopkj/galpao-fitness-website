/* =====================================================
   AVALIAÇÃO POR ESTRELAS
   Responsável pelo sistema de avaliação visual
===================================================== */

const stars = document.querySelectorAll('.rating-avaliacao .star');
const avaliacaoTexto = document.getElementById('avaliacao-texto');
let selectedRating = 0;

const ratingsText = [
  "Muito ruim",
  "Ruim",
  "Regular",
  "Bom",
  "Excelente"
];

stars.forEach((star, index) => {
  star.addEventListener('mouseover', () => {
    highlightStars(index);
    avaliacaoTexto.textContent = ratingsText[index];
  });

  star.addEventListener('mouseout', () => {
    highlightStars(selectedRating - 1);
    avaliacaoTexto.textContent = selectedRating
      ? ratingsText[selectedRating - 1]
      : '';
  });

  star.addEventListener('click', () => {
    selectedRating = index + 1;
    highlightStars(index);
    avaliacaoTexto.textContent = ratingsText[index];
    alert(`Obrigado por avaliar com ${selectedRating} estrela(s)!`);
  });
});

function highlightStars(index) {
  stars.forEach((star, i) => {
    star.classList.toggle('selected', i <= index);
  });
}


// ===== FORMULÁRIO =====
const form = document.getElementById('contactForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const { nome, email, assunto, mensagem } = form;

  if (
    !nome.value.trim() ||
    !email.value.trim() ||
    !assunto.value.trim() ||
    !mensagem.value.trim()
  ) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

   // Aqui pode ser integrada uma API ou EmailJS futuramente

  alert('Mensagem enviada com sucesso!');
  form.reset();
});


/* ===== ANIMAÇÕES DE SCROLL (ScrollReveal)
   Efeitos suaves ao rolar a página =====*/

ScrollReveal({
  distance: '60px',
  duration: 1200,
  easing: 'ease-out',
  reset: false
});

// Fade suave
ScrollReveal().reveal('.sr-fade', { opacity: 0 });

// Entrada de baixo para cima
ScrollReveal().reveal('.sr-up', { origin: 'bottom' });

// Entrada da esquerda para a direita
ScrollReveal().reveal('.sr-left', { origin: 'left' });

// Entrada da direita para a esquerda
ScrollReveal().reveal('.sr-right', { origin: 'right' });



