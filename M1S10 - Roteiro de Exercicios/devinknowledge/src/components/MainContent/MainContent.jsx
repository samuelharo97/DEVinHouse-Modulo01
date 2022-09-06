import { CardList, Filter, Summary, TipCard } from '@components'
import { useAppContext } from '@context'

export const MainContent = () => {
  const { tips } = useAppContext()
  return (
    <section className="right-side">
      <Summary />
      <Filter />
      <CardList>
        {tips.map((tip, index) => {
          return <TipCard key={index} dica={tip} />
        })}
      </CardList>
    </section>
  )
}
