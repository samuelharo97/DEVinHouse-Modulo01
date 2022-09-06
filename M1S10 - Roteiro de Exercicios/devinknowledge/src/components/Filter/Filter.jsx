import { useAppContext } from '@context'

export const Filter = () => {
  const { filterTip } = useAppContext()

  return (
    <div className="search-wrapper">
      <input
        type="search"
        name="search"
        id="searchInput"
        placeholder="Digite um título para buscar.."
        onChange={e => filterTip(e.target.value)}
      />
      <button className="searchButton">Buscar</button>
      <button className="searchButton">Limpar</button>
    </div>
  )
}
