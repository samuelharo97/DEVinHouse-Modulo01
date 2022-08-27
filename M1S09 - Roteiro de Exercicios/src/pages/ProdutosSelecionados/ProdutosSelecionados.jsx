import { ListaCards } from '@components'
import { useProdutosSelecionados } from '@contexts'
import { produtos } from '@services'

export const ProdutosSelecionados = () => {
  const { produtosSelecionados } = useProdutosSelecionados()
  const total = produtosSelecionados.reduce((soma, item) => {
    return soma + item.valor
  }, 0)
  
  return (
    <>
      <h1>Produtos Selecionados</h1>
      <h2>{total}</h2>
      <ListaCards produtos={produtosSelecionados} />
    </>
  )
}
