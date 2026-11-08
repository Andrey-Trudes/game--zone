var botoes = document.querySelectorAll(".btn-curtir");

for (var i = 0; i < botoes.length; i++) {
  botoes[i].onclick = function () {
    var span = this.querySelector(".curtidas");
    span.textContent = Number(span.textContent) + 1;
  };
}
