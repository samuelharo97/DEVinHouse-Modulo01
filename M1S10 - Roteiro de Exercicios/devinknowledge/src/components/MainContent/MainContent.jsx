import { Summary } from '@components'

export const MainContent = () => {
  return (
    <section className="right-side">
      <Summary />
      <div className="search-wrapper">
        <input
          type="search"
          name="search"
          id="searchInput"
          placeholder="Digite um título para buscar.."
        />
      </div>
    </section>
  )
}
