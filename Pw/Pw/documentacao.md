# Capa

**Centro Universitario SENAC** -- Analise e Desenvolvimento de Sistemas

**Trabalho Final: Site com Bento Grid Design (tema: Jogos)**

Integrantes:
- Andrey Trudes
- Breno
- Eduardo Bispo
- Leticia Gabriellen
- Matheus Pompei
- Rodrigo Barbosa
- Thiago Soares

---

# 1. O que e o Bento Grid Design

Bento Grid e uma tecnica de layout inspirada nas marmitas japonesas (bento), onde cada compartimento tem um tamanho diferente. Na web, a ideia e a mesma: a pagina e dividida em cards de tamanhos variados dentro de uma grade. Cada card mostra uma informacao diferente.

Essa tecnica ficou popular em sites de tecnologia, como nas paginas de produto da Apple, e e bastante usada hoje em dia em portfolios e landing pages.

## Por que e importante no desenvolvimento web

- **Organizacao visual:** cada assunto fica em seu proprio bloco, facilitando a leitura.
- **Hierarquia:** cards maiores chamam mais atencao, entao da pra destacar o que e mais importante.
- **Responsividade:** como usa CSS Grid, a grade se adapta a telas de celular, tablet e computador.
- **Facil de manter:** adicionar ou tirar um card nao quebra o resto da pagina.
- **Visual moderno:** deixa a pagina bonita sem precisar de muitas imagens.

---

# 2. Trecho do codigo

## 2.1 A grade Bento (CSS)

Esse e o trecho principal que cria o layout bento grid:

```css
.bento-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 14px;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

.card {
  background: #fff;
  border-radius: 14px;
  padding: 22px;
}

.largo  { grid-column: span 2; }
.alto   { grid-row: span 2; }
.grande { grid-column: span 2; grid-row: span 2; }
```

## 2.2 Cards coloridos (CSS)

Para destacar alguns cards, usamos classes com cores diferentes:

```css
.azul {
  background: #2563eb;
  color: #fff;
}

.azul-claro {
  background: #dbeafe;
}
```

## 2.3 Responsividade (CSS)

No celular, a grade muda para uma coluna so:

```css
@media (max-width: 700px) {
  .bento-grid {
    grid-template-columns: 1fr;
  }
}
```

## 2.4 Botao de curtir (JavaScript)

Na pagina de jogos, cada genero tem um botao de curtir:

```js
var botoes = document.querySelectorAll(".btn-curtir");

for (var i = 0; i < botoes.length; i++) {
  botoes[i].onclick = function () {
    var span = this.querySelector(".curtidas");
    span.textContent = Number(span.textContent) + 1;
  };
}
```

## 2.5 Exemplo de um card no HTML

```html
<section class="card largo azul-claro">
  <i class="bx bx-mobile-alt"></i>
  <h2>Mobile</h2>
  <p>Jogos rapidos para qualquer hora e lugar.</p>
</section>
```

---

# 3. Explicacao do funcionamento

## CSS

- `display: grid` transforma o elemento `.bento-grid` em uma grade.
- `grid-template-columns: 1fr 1fr 1fr 1fr` cria 4 colunas de tamanho igual. O `1fr` significa que cada coluna ocupa uma fracao igual do espaco disponivel.
- `gap: 14px` e o espaco entre os cards.
- `.largo` usa `grid-column: span 2` para o card ocupar 2 colunas. `.alto` usa `grid-row: span 2` para ocupar 2 linhas. `.grande` combina os dois. E isso que cria o efeito bento, com cards de tamanhos diferentes na mesma grade.
- O `@media (max-width: 700px)` detecta quando a tela e pequena (celular) e muda a grade para 1 coluna so, fazendo todos os cards ficarem empilhados.

## JavaScript

- `document.querySelectorAll(".btn-curtir")` pega todos os botoes de curtir da pagina.
- O `for` percorre cada botao.
- `botoes[i].onclick` define o que acontece quando o botao e clicado.
- Dentro do clique, `this.querySelector(".curtidas")` pega o span com o numero de curtidas daquele botao especifico.
- `Number(span.textContent) + 1` converte o texto para numero, soma 1, e coloca o resultado de volta no span.

## HTML e navegacao

O site tem 3 paginas:
- **index.html** -- pagina inicial com informacoes gerais sobre o mundo dos jogos.
- **jogos.html** -- lista de generos de jogos com botao de curtir em cada um.
- **equipe.html** -- integrantes do grupo e tecnologias usadas.

Todas as paginas tem o mesmo cabecalho com links de navegacao, o mesmo arquivo CSS e o mesmo JavaScript. Os icones vem da biblioteca Boxicons, carregada via CDN.
