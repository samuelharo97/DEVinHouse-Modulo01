export function render(pedido) {
  function displayDate() {
    const date = document.querySelector('.date')
    let today = new Date()
    date.textContent =
      today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear()
  }

  function displayOrderNumber(pedido) {
    const orderNumber = document.querySelector('.orderNumber')
    orderNumber.innerHTML = `Pedido n. <strong>${pedido.numeroPedido}</strong>`
  }

  function displayOrderList(pedido) {
    const orderList = document.querySelector('.productsList')
    let newList = ''
    for (let i = 0; i < pedido.listaProdutos.length; i++) {
      let li = document.createElement('li')
      orderList.appendChild(li)
      li.textContent = `${pedido.listaProdutos[i].nome} - Quantidade: ${
        pedido.listaProdutos[i].quantidade
      } - Valor un: ${pedido.listaProdutos[i].preco.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      })} `
      newList += li.textContent
    }
    return newList
  }

  function displayClient(pedido) {
    const client = document.querySelector('.clientName')
    client.innerHTML = `Cliente: <span> ${pedido.nomeCliente} </span>`
  }

  function displayPaymentStatus(pedido) {
    const paymentStatus = document.querySelector('.paymentStatus')
    if (pedido.estaPago) {
      paymentStatus.innerHTML = 'Está pago? <span> Sim </span>'
    } else paymentStatus.innerHTML = 'Está pago? <span> Não </span>'
  }

  function displayTotal(pedido) {
    const orderTotal = document.querySelector('.orderTotal')
    const value = pedido.calcularTotal().toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
    orderTotal.innerHTML = `Valor total: <span> ${value} </span>`
  }
  return {
    displayClient,
    displayDate,
    displayOrderList,
    displayOrderNumber,
    displayPaymentStatus,
    displayTotal
  }
}
