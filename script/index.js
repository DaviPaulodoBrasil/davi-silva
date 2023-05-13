document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');
  
    links.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
  
        const target = document.querySelector(this.getAttribute('href'));
        const offsetTop = target.offsetTop;
  
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      });
    });
  });
  
  // Mostrar mais detalhes de um projeto
  document.addEventListener('DOMContentLoaded', function() {
    const projetoLinks = document.querySelectorAll('.projeto-link');
  
    projetoLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
  
        const projeto = this.parentNode;
        const descricao = projeto.querySelector('p');
        descricao.classList.toggle('show');
      });
    });
  });
  
  // Enviar formulário de contato
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
  
      // Aqui você pode adicionar a lógica para enviar o formulário
      // por meio de uma requisição AJAX ou qualquer outro método de sua escolha
  
      // Exemplo de exibição de mensagem de sucesso após o envio do formulário
      const mensagemSucesso = document.createElement('p');
      mensagemSucesso.textContent = 'Mensagem enviada com sucesso!';
      form.appendChild(mensagemSucesso);
      form.reset();
    });
  });