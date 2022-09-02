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
        <TipCard
          key={2}
          title="Dica dois"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam deleniti odit ut at unde officia vel obcaecati iusto modi officiis rem eius voluptatem nulla veritatis dolorum, consequatur labore id hic?"
          category=""
          language=""
          video=""
        />
        <TipCard
          key={3}
          title="Dica tres"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam deleniti odit ut at unde officia vel obcaecati iusto modi officiis rem eius voluptatem nulla veritatis dolorum, consequatur labore id hic?"
          category=""
          language=""
          video=""
        />
        <TipCard
          key={4}
          title="Dica quatro"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam deleniti odit ut at unde officia vel obcaecati iusto modi officiis rem eius voluptatem nulla veritatis dolorum, consequatur labore id hic?"
          category=""
          language=""
          video=""
        />
        <TipCard
          key={5}
          title="Dica cinco"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam deleniti odit ut at unde officia vel obcaecati iusto modi officiis rem eius voluptatem nulla veritatis dolorum, consequatur labore id hic?"
          category=""
          language=""
          video=""
        />
      </CardList>
    </section>
  )
}
