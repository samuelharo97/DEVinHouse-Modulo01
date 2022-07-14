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

ulCamarote.innerHTML = `<li> ${listaCamarote[0].nome} ${listaCamarote[0].sobrenome} </li>`
ulCamarote.innerHTML += `<li> ${listaCamarote[1].nome} ${listaCamarote[1].sobrenome} </li>`
ulArquibancada.innerHTML = `<li> ${listaArquibancada[0].nome} ${listaArquibancada[0].sobrenome} </li>`
ulArquibancada.innerHTML += `<li> ${listaArquibancada[1].nome} ${listaArquibancada[1].sobrenome} </li>`
ulPista.innerHTML = `<li> ${listaPista[0].nome} ${listaPista[0].sobrenome} </li>`
ulPista.innerHTML += `<li> ${listaPista[1].nome} ${listaPista[1].sobrenome} </li>`
