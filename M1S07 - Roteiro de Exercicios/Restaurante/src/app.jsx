import data from './services/data.json'
import { Section } from './components/Section'

export function App() {
  const subSectionDishes = new Set(data.entradas.map(food => food.subSection))
  const subSectionMain = new Set(data.principais.map(food => food.subSection))

  return (
    <div>
      <Section
        name="Entradas"
        data={data.entradas}
        subSection={Array.from(subSectionDishes)}
      />
      <Section
        name="Principais"
        data={data.principais}
        subSection={Array.from(subSectionMain)}
      />
      <Section name="Sobremesas" data={data.sobremesas} />
    </div>
  )
}
