const contasClientes = [
  {
    id: 1,
    nome: 'Cliente 01',
    saldo: 500,
    senha: 435467
  },
  {
    id: 2,
    nome: 'Cliente 02',
    saldo: 3000,
    senha: 654654
  },
  {
    id: 3,
    nome: 'Cliente 03',
    saldo: 5000,
    senha: 789781
  }
]

let accounts = document.querySelector('#account')
let sendButton = document.querySelector('#send')
let action = document.querySelector('#options')
let amount = document.querySelector('#amount')
let password = document.querySelector('#password')
let selectedOption

accounts.addEventListener('change', function () {
  selectedOption = Number(accounts.value)
})

sendButton.addEventListener('click', function () {
  let senha = checkPassword(password, selectedOption)
  if (senha) {
    if (action.value === 'withdraw') {
      withdrawMoney(amount.value, selectedOption)
    } else if (action.value === 'deposit') {
      depositMoney(amount.value, selectedOption)
    }
  } else {
    alert('Senha Incorreta')
  }
})

function addAccount() {
  contasClientes.forEach((object, i) => {
    accounts.innerHTML += `<option value="${i + 1}"> ${
      contasClientes[i].nome
    } </option>`
  })
}

function checkPassword(inputPassword, idDaConta) {
  accountPassword = contasClientes.find(conta => conta.id === idDaConta).senha

  inputPassword = Number(inputPassword.value)

  if (inputPassword != accountPassword) {
    return false
  } else {
    return true
  }
}

function withdrawMoney(value, idDaConta) {
  selectedAccount = contasClientes.find(conta => conta.id === idDaConta).saldo
  if (value > selectedAccount || value <= 0) {
    alert('Valor inválido.')
  } else {
    selectedAccount = Number(selectedAccount) - Number(value)
    contasClientes[idDaConta - 1].saldo = selectedAccount
    alert(`Saque concluído. Saldo atual: R$ ${selectedAccount}`)
  }
}

function depositMoney(value, idDaConta) {
  selectedAccount = contasClientes.find(conta => conta.id === idDaConta).saldo
  if (value <= 0) {
    alert('Valor inválido.')
  } else {
    selectedAccount = Number(selectedAccount) + Number(value)
    contasClientes[idDaConta - 1].saldo = selectedAccount
    alert(`Depósito concluído. Saldo atual: R$ ${selectedAccount}`)
  }
}

window.onload = addAccount()
