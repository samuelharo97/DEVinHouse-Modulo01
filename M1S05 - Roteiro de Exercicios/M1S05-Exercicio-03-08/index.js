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

ren.createCard('1') //card 1

ren.displayDate('1')
ren.displayOrderNumber(pedido1, '1')
ren.displayOrderList(pedido1, '1')
ren.displayClient(pedido1, '1')
ren.displayPaymentStatus(pedido1, '1')
ren.displayTotal(pedido1, '1')

ren.createCard('2') // card 2

ren.displayDate('2')
ren.displayOrderNumber(pedido2, '2')
ren.displayOrderList(pedido2, '2')
ren.displayClient(pedido2, '2')
ren.displayPaymentStatus(pedido2, '2')
ren.displayTotal(pedido2, '2')
