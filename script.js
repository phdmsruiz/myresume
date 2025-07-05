document.addEventListener("DOMContentLoaded", function() {
  alert("Bem-vindo ao site de Melissa Salinas Ruiz!");
});

const nome = prompt ("Qual é o seu nome?");
document.getElementById("saudacao").textContent = 'Olá, ${nome}! Obrigada pela visita';
