const formacao = document.querySelectorAll('.formacao-conteudo button');

function mostrarFormacao(event){
const formar = event.currentTarget;
const controls = formar.getAttribute("aria-controls");
const resposta = document.getElementById(controls)

formar.setAttribute('aria-expanded', true);
resposta.classList.toggle('mostrar');
}

function ativarFormacao(formar){
formar.addEventListener('click', mostrarFormacao);
}

formacao.forEach(ativarFormacao);