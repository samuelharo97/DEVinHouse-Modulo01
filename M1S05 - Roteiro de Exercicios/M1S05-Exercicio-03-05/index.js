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
    for (let i = 0; i < this.listaProdutos.length, i++){
       let total = 0
       const price = this.listaProdutos[i].pedido.preco
       const quantity = this.listaProdutos[i].pedido.quantidade
       total = price * quantity
       this.listaProdutos[i].push(total)
    }
  }
}
