const formacao = document.querySelectorAll('.formacao-conteudo button');

function ativarFormacao(event){
  const formar = event.currentTarget;
  const controls = formar.getAttribute("aria-controls");
  const situacao = document.getElementById(controls);
  
  situacao.classList.toggle('mostrar');
  const ativa = situacao.classList.contains("mostrar")
  formar.setAttribute("aria-expanded", ativa);

}

function eventosFormacao(formar){
  formar.addEventListener('click',ativarFormacao);
};

formacao.forEach(eventosFormacao);