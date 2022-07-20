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
    accounts.innerHTML += `<option class="conta${i}"> ${contasClientes[i].nome} </option>`
  })
}

function withdrawFrom(value, idDaConta) {
  let selectedAccount = contasClientes.find(
    conta => conta.id === idDaConta
  ).saldo

  if (value > selectedAccount) {
    alert('Valor inválido.')
  } else {
    selectedAccount -= value
    contasClientes[idDaConta - 1].saldo = selectedAccount
    alert(`Saque concluído. Saldo atual: R$ ${selectedAccount}`)
  }
}
