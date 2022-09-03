import { CardList, Filter, Summary, TipCard } from '@components'
import { useAppContext } from '@context'

export const MainContent = () => {
  const result = useAppContext()
  console.log(result)

  return (
    <section className="right-side">
      <Summary />
      <Filter />
      <CardList>
        <TipCard
          key={1}
          title="Dica um"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam deleniti odit ut at unde officia vel obcaecati iusto modi officiis rem eius voluptatem nulla veritatis dolorum, consequatur labore id hic?"
          category="FrontEnd"
          language="FrontEnd"
          video="https://www.youtube.com/watch?v=x-4z_u8LcGc"
        />
      </CardList>
    </section>
  )
}
