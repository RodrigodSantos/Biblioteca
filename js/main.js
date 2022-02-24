import livros from "./livros.js";
var Cards = []
for (let x = 0; x < livros.length; x++) {
  let Card =`<div class="col-sm-3">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">${livros[x]['nome']}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${livros[x]['genero']}</h6>
      <p class="card-text">${livros[x]['status']}</p>
    </div>
  </div>
</div>`
  Cards.push(Card)
}
document.getElementById('AddCard').innerHTML = Cards
console.log(Cards);
