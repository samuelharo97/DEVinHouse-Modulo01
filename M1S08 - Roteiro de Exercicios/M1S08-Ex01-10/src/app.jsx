import { Footer, Header, Secao, FiltroSecao } from '@components'
import produtos from '@services/produtos.json'
import styles from './App.module.css'
import { useState } from 'react'

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
  const [activeSection, setActiveSection] = useState(null)
  function handleSelecionarSecao(clickedSection) {
    if (clickedSection === activeSection) {
      console.log('state = null')
      setActiveSection(null)
    } else {
      console.log(`state = ${clickedSection}`)
      setActiveSection(clickedSection)
    }
  }

  return (
    <div className={styles.app}>
      <Header />
      <FiltroSecao
        array={arrayOfProducts}
        onSelecionarSecoes={nome => handleSelecionarSecao(nome)}
      />
      <main className={styles.main}>
        {activeSection === null ? (
          arrayOfProducts.map(secao => (
            <Secao
              key={secao.nome}
              nome={secao.nome}
              produtos={secao.itens}
              subSecoes={secao.subSecoes && Array.from(secao.subSecoes)}
            />
          ))
        ) : (
          <Secao
            nome={activeSection}
            produtos={arrayOfProducts.find(p => p.nome === activeSection).itens}
            subSecoes={
              arrayOfProducts.find(p => p.nome === activeSection).subSecoes
            }
          />
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App
