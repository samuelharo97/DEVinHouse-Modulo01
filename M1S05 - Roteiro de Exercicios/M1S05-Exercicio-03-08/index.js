import Produto from './products.js'
import Pedido from './orders.js'
import { render } from './render.js'

const ren = render()

const produto1 = new Produto('Chocolate', 5, true, 10)
const produto2 = new Produto('Celular', 2000, true, 1)
const produto3 = new Produto('Cerveja', 35, true, 3)
const produto4 = new Produto('Teclado', 200, true, 1)
const produto5 = new Produto('Mouse', 150, true, 1)

const pedido1 = new Pedido(20220001, 'Samuel Haro')
const pedido2 = new Pedido(20220002, 'Gabrielly Pontes')

pedido1.adicionarProduto(produto1)
pedido1.adicionarProduto(produto4)
pedido1.adicionarProduto(produto5)

pedido2.adicionarProduto(produto2)
pedido2.adicionarProduto(produto3)

function createCard() {
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
  app.classList.add('card')
  app.appendChild(header)
  header.classList.add('header')
  header.appendChild(h2)
  h2.classList.add('orderNumber')
  header.appendChild(date)
  date.classList.add('date')

  const details = document.createElement('div')

  app.appendChild(details)
  details.classList.add('details-card')
  details.appendChild(name)
  name.classList.add('clientName')
  details.appendChild(orderVal)
  orderVal.classList.add('orderTotal')
  details.appendChild(payment)
  payment.classList.add('paymentStatus')

  app.appendChild(ul)
  ul.classList.add('productsList')
}
const card1 = createCard()
ren.displayDate()
ren.displayOrderNumber(pedido1)
ren.displayOrderList(pedido1)
ren.displayClient(pedido1)
ren.displayPaymentStatus(pedido1)
ren.displayTotal(pedido1)

const card2 = createCard()
