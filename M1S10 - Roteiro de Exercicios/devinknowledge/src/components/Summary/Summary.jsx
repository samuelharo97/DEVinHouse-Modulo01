import { SummaryCard } from '@components'
import { useAppContext } from '@context'

export const Summary = () => {
  // eslint-disable-next-line no-unused-vars
  const { categories } = useAppContext()
  return (
    <nav>
      {categories.map((category, index) => {
        return (
          <SummaryCard
            key={index}
            title={category.title}
            count={category.count}
          />
        )
      })}
    </nav>
  )
}
