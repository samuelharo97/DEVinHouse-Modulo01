var pessoaConvidada = {
  nome: 'Gustavo',
  sobrenome: 'Ribeiro',
  setor: 'Camarote',
  idade: 18
}
var pessoaConvidada2 = {
  nome: 'Maria',
  sobrenome: 'Freitas',
  setor: 'Camarote',
  idade: 16
}
var pessoaConvidada3 = {
  nome: 'Lucas',
  sobrenome: 'Lima',
  setor: 'Arquibancada',
  idade: 22
}
var pessoaConvidada4 = {
  nome: 'Gabrielly',
  sobrenome: 'Pontes',
  setor: 'Pista',
  idade: 20
}
var pessoaConvidada5 = {
  nome: 'Junior',
  sobrenome: 'Albino',
  setor: 'Pista',
  idade: 17
}
var pessoaConvidada6 = {
  nome: 'Fernanda',
  sobrenome: 'Neri',
  setor: 'Arquibancada',
  idade: 17
}

const listaDeConvidados = [
  pessoaConvidada,
  pessoaConvidada2,
  pessoaConvidada3,
  pessoaConvidada4,
  pessoaConvidada5,
  pessoaConvidada6
]

function liberarBebidas(objList) {
  let newArray = []

  for (var i = 0; i < objList.length; i++) {
    var transfer = objList[i]
    newArray.push(transfer)
    if (objList[i].idade > 17) {
      newArray[i].openBar = true
    } else {
      newArray[i].openBar = false
    }
  }
  return newArray
}

convidadosComBebidasProcessada = liberarBebidas(listaDeConvidados)

function sectors(objList, sector) {
  return objList.filter(index => index.setor === sector)
}

function separarCamarote() {
  return sectors(listaDeConvidados, 'Camarote')
}
function separarPista() {
  return sectors(listaDeConvidados, 'Pista')
}
function separarArquibancada() {
  return sectors(listaDeConvidados, 'Arquibancada')
}

var listaCamarote = separarCamarote()
var listaPista = separarPista()
var listaArquibancada = separarArquibancada()


