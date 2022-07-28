class Produto {
  constructor(nome, preco, emEstoque, quantidade) {
    this.nome = nome
    this.preco = preco
    this.emEstoque = emEstoque
    this.quantidade = quantidade
  }
}

class Pedido {
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
console.log(pedido2.calcularTotal())
