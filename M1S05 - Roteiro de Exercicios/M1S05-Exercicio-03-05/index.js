class Produto {
  constructor(nome, preco, emEstoque, quantidade) {
    this.nome = nome
    this.preco = preco
    this.emEstoque = emEstoque
    this.quantidade = quantidade
  }
}

class Pedido {
  constructor(numeroPedido, dataPedido, estaPago, listaProdutos, nomeCliente) {
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

  
}
