/*
OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o próximo cartão da lista
    - passo 1 - dar um jeito de pegar o elemento HTML da seta avançar
    - passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
    - passo 3 - buscar o cartão que está selecionado e esconder
    - passo 4 fazer aparecer o próximo cartão da lista

 OBJETIVO 2 - quando clicarmos na seta de voltr temos que mostrar o próximo cartão da lista
    - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
    - passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
    - passo 3 - buscar o cartão que está selecionado e esconder 
    - passo 4 - fazer aparecer o cartão anterior da lista
*/

const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

btnAvancar.addEventListener("click", function () {
  if (cartaoAtual === cartoes.length - 1) {
    cartaoAtual = -1;
  }
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
  cartaoAtual++;
  cartoes[cartaoAtual].classList.add("selecionado");

  
});

btnVoltar.addEventListener("click", function () {
  if (cartaoAtual === 0) {
    cartaoAtual = cartoes.length;
  }

  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");

  cartaoAtual--;
  cartoes[cartaoAtual].classList.add("selecionado");
});
