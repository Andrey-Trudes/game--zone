var botoes = document.querySelectorAll(".btn-curtir");

for (var i = 0; i < botoes.length; i++) {
  botoes[i].onclick = function () {
    var span = this.querySelector(".curtidas");
    span.textContent = Number(span.textContent) + 1;
  };
}

// pop up referente ao game zelda para dar a analise

const botao = document.getElementById("btn-analise"); // denomina o que vai fazer
const popup = document.getElementById("popup-analise");
const fechar = document.getElementById("fechar-analise");

botao.addEventListener("click", () => popup.showModal()); // com base nos clicks ele dispara uma ação.
fechar.addEventListener("click", () => popup.close());
