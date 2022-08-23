import { Footer, Header, Secao, FiltroSecao } from '@components'
import produtos from '@services/produtos.json'
import styles from './App.module.css'

function App() {
  const subSecoesEntradas = new Set(produtos.entradas.map(p => p.subSecao))
  const subSecoesPrincipais = new Set(produtos.principais.map(p => p.subSecao))
  const arrayOfProducts = [
    {
      nome: 'Entradas',
      itens: produtos.entradas,
      subSecoes: Array.from(subSecoesEntradas)
    },
    {
      nome: 'Principais',
      itens: produtos.principais,
      subSecoes: Array.from(subSecoesPrincipais)
    },
    {
      nome: 'Sobremesas',
      itens: produtos.sobremesas,
      subSecoes: null
    }
  ]

  return (
    <div className={styles.app}>
      <Header />
      <FiltroSecao
        array={arrayOfProducts}
        onSelecionarSecoes={nome => console.log(nome)}
      />
      <main className={styles.main}>
        {arrayOfProducts.map(secao => (
          <Secao
            key={secao.nome}
            nome={secao.nome}
            produtos={secao.itens}
            subSecoes={secao.subSecoes && Array.from(secao.subSecoes)}
          />
        ))}
      </main>
      <Footer />
    </div>
  )
}

export default App