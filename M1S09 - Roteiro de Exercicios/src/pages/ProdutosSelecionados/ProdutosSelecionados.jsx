import { ListaCards } from '@components'
import { useProdutosSelecionados } from '@contexts'
import styles from './ProdutosSelecionados.module.css'

export const ProdutosSelecionados = () => {
  const { produtosSelecionados, setProdutosSelecionados } =
    useProdutosSelecionados()
  const total = produtosSelecionados.reduce((soma, item) => {
    return soma + item.valor
  }, 0)

  const clearProducts = () => {
    setProdutosSelecionados([])
  }

  return (
    <>
      <h1>Produtos Selecionados</h1>
      <h2>{`R$ ${total.toFixed(2).replace('.', ',')}`}</h2>
      <button className={styles.clearButton} onClick={() => clearProducts()}>
        Limpar Produtos
      </button>
      <ListaCards produtos={produtosSelecionados} />
    </>
  )
}
