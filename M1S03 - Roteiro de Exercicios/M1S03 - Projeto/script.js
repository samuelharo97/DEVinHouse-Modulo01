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
  nome: 'Samuel',
  sobrenome: 'Haro',
  setor: 'Pista',
  idade: 25
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

const ulCamarote = document.querySelector('.camarote')
const ulArquibancada = document.querySelector('.arquibancada')
const ulPista = document.querySelector('.pista')

function addToList(array, ulList) {
  array.forEach((n, i) => {
    if (array[i].openBar === true) {
    ulList.innerHTML += `<li> ${array[i].nome} ${array[i].sobrenome} 🍹 </li>`
    }else{
    ulList.innerHTML += `<li> ${array[i].nome} ${array[i].sobrenome}</li>`
    }
  })
}

addToList(listaCamarote, ulCamarote)
addToList(listaPista, ulPista)
addToList(listaArquibancada, ulArquibancada)
