import { SummaryCard } from '@components'

export const Summary = () => {
  return (
    <nav>
      <SummaryCard title="Total" count={20} />
      <SummaryCard title="FrontEnd" count={5} />
      <SummaryCard title="BackEnd" count={5} />
      <SummaryCard title="FullStack" count={7} />
      <SummaryCard title="SoftSkill" count={3} />
    </nav>
  )
}
