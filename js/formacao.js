const formacao = document.querySelectorAll('.formacao-conteudo button');

function ativarFormacao(event){
  const formar = event.currentTarget;
  const controls = formar.getAttribute("aria-controls");
  const situacao = document.getElementById(controls);
  
  situacao.classList.toggle('mostrar')

}

function eventosFormacao(formar){
  formar.addEventListener('click',ativarFormacao);
};

formacao.forEach(eventosFormacao);