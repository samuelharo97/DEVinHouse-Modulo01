let accounts = document.querySelector('#account')

const contasClientes = [
  {
    id: 1,
    nome: 'Cliente 01',
    saldo: 500
  },
  {
    id: 2,
    nome: 'Cliente 02',
    saldo: 3000
  },
  {
    id: 3,
    nome: 'Cliente 03',
    saldo: 5000
  }
]

function addAccount() {
  contasClientes.forEach((n, i) => {
    accounts.innerHTML +=  `<option> ${contasClientes[i].nome} </option>`
  })
}
