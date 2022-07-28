import Produto from './products.js'
export default class Pedido {
  constructor(numeroPedido, nomeCliente) {
    this.numeroPedido = numeroPedido
    this.dataPedido = new Date().toLocaleDateString()
    this.estaPago = false
    this.listaProdutos = []
    this.nomeCliente = nomeCliente
  }

  adicionarProduto(pedido) {
    if (pedido instanceof Produto) {
      this.listaProdutos.push(pedido)
    }
  }

  calcularTotal() {
    let total = 0
    for (let i = 0; i < this.listaProdutos.length; i++) {
      const price = this.listaProdutos[i].preco
      const quantity = this.listaProdutos[i].quantidade
      total += price * quantity
    }
    return total
  }
}
