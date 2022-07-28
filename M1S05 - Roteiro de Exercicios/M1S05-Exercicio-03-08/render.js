export function render(pedido, cardNumber) {
  function displayDate(cardNumber) {
    const date = document.querySelector(`.date${cardNumber}`)
    let today = new Date()
    date.textContent =
      today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear()
  }

  function displayOrderNumber(pedido, cardNumber) {
    const orderNumber = document.querySelector(`.orderNumber${cardNumber}`)
    orderNumber.innerHTML = `Pedido n. <strong>${pedido.numeroPedido}</strong>`
  }

  function displayOrderList(pedido, cardNumber) {
    const orderList = document.querySelector(`.productsList${cardNumber}`)
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

  function displayClient(pedido, cardNumber) {
    const client = document.querySelector(`.clientName${cardNumber}`)
    client.innerHTML = `Cliente: <span> ${pedido.nomeCliente} </span>`
  }

  function displayPaymentStatus(pedido, cardNumber) {
    const paymentStatus = document.querySelector(`.paymentStatus${cardNumber}`)
    if (pedido.estaPago) {
      paymentStatus.innerHTML = 'Está pago? <span> Sim </span>'
    } else paymentStatus.innerHTML = 'Está pago? <span> Não </span>'
  }

  function displayTotal(pedido, cardNumber) {
    const orderTotal = document.querySelector(`.orderTotal${cardNumber}`)
    const value = pedido.calcularTotal().toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
    orderTotal.innerHTML = `Valor total: <span> ${value} </span>`
  }
  function createCard(cardNumber) {
    const header = document.createElement('div')
    const h2 = document.createElement('h2')
    const ul = document.createElement('ul')
    const app = document.createElement('div')
    const date = document.createElement('p')
    const name = document.createElement('p')
    const orderVal = document.createElement('p')
    const payment = document.createElement('p')
    const body = document.querySelector('body')

    body.appendChild(app)
    app.classList.add(`card${cardNumber}`)
    app.appendChild(header)
    header.classList.add(`header${cardNumber}`)
    header.appendChild(h2)
    h2.classList.add(`orderNumber${cardNumber}`)
    header.appendChild(date)
    date.classList.add(`date${cardNumber}`)

    const details = document.createElement(`div${cardNumber}`)

    app.appendChild(details)
    details.classList.add(`details-card${cardNumber}`)
    details.appendChild(name)
    name.classList.add(`clientName${cardNumber}`)
    details.appendChild(orderVal)
    orderVal.classList.add(`orderTotal${cardNumber}`)
    details.appendChild(payment)
    payment.classList.add(`paymentStatus${cardNumber}`)

    app.appendChild(ul)
    ul.classList.add(`productsList${cardNumber}`)
  }
  return {
    displayClient,
    displayDate,
    displayOrderList,
    displayOrderNumber,
    displayPaymentStatus,
    displayTotal,
    createCard
  }
}
