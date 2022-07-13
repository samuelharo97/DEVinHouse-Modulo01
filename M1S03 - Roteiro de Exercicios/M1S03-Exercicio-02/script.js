const guests = document.querySelector('.guestlist')
const button = document.querySelector('.add')

var listaConvidados = [
  { nome: 'José', sobrenome: 'Carlos' },
  { nome: 'Alessandro', sobrenome: 'Viana' },
  { nome: 'Paula', sobrenome: 'Souza' },
  { nome: 'Cristian', sobrenome: 'Schimit' },
  { nome: 'Beatriz', sobrenome: 'Viana' },
  { nome: 'Fernanda', sobrenome: 'Silveira' },
  { nome: 'Cláudia', sobrenome: 'Torres' },
  { nome: 'Augusto', sobrenome: 'Cesar' },
  { nome: 'Noemi', sobrenome: 'Nakamura' },
  { nome: 'Pedro', sobrenome: 'Lobo' }
]

var listaNomeCompleto = []

function completarLista() {
  listaConvidados.forEach(listaConvidados => {
    listaNomeCompleto.push(
      `${listaConvidados.nome} ${listaConvidados.sobrenome}`
    )
    guests.innerHTML +=
      '<li>' + listaConvidados.nome + ' ' + listaConvidados.sobrenome + '</li>'
  })
}

console.log(listaNomeCompleto)

button.addEventListener('click', function () {
  completarLista()
})
