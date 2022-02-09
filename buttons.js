//Botões tela de cadastro

//esconder senha
function mostrar() {
  document.getElementById('senha').setAttribute('type', 'text')
  document.getElementById('botaosenha').setAttribute('onclick', 'esconder()')
  document.getElementById('botaosenha').innerText = 'Esconder senha'
}

//mostrar senha
function esconder() {
  document.getElementById('senha').setAttribute('type', 'password')
  document.getElementById('botaosenha').setAttribute('onclick', 'mostrar()')
  document.getElementById('botaosenha').innerText = 'Mostrar senha'
}

//cadastrar
function cadastrar() {
  let dados = {
    'nome': document.getElementById('nome').value,
    'sobrenome': document.getElementById('sobrenome').value,
    'email': document.getElementById('email').value,
    'celular': document.getElementById('celular').value,
    'senha': document.getElementById('senha').value,
    'status': 'ativo',
    'matricula': 0
  }
  cadastrados.push(dados)
  console.log(cadastrados);//tirar depois
}

//procura nome + sobrenome
function procucar() {
  for (let x = 0; x < cadastrados.length; x++) {
    console.log(cadastrados[x]['nome'] + ' ' + cadastrados[x]['sobrenome']);
  }
}

var cadastrados = []
