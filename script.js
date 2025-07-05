//adicionando mensagem de saudação
document.addEventListener("DOMContentLoaded", function() {
  alert("Bem-vindo ao site de Melissa Salinas Ruiz!");

  const formulario = document.getElementById("formularioContato");

//adicionando funcionalidades javascript para o formulário
  formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Impede envio real

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    alert(`Obrigado, ${nome}!\nRecebemos sua mensagem:\n"${mensagem}"\nResponderemos em breve pelo e-mail: ${email}`);
  });
});
