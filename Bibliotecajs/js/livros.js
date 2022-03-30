import livros from "./livros-list.js";

function addCards() {
  for (let x = 0; x < livros.length; x++) {
    let titulo =  livros[x]['nome']
    let genero =  livros[x]['genero']
    let status =  livros[x]['status']
    card(titulo, genero, status)
  }
}

function card(titulo, genero, status) {

  var card = `<div class="livro">
  <img id="capa" src="https://www.hypeness.com.br/1/2018/07/PBooks8.jpg" alt="capa" width="100%" height="50%">
  <div class="titulo">
    <h3>${titulo}</h3>
  </div>
  <div class="genero">
    <p>${genero}</p>
  </div>
  <div class="info">
    <p>${status}</p>
  </div>
  </div>`
  let teste = document.getElementById("container")
  teste.insertAdjacentHTML('beforeend', card)

}

addCards()