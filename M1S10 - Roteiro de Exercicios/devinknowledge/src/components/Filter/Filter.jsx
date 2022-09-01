export const Filter = () => {
  return (
    <div className="search-wrapper">
      <input
        type="search"
        name="search"
        id="searchInput"
        placeholder="Digite um título para buscar.."
      />
      <button /* onClick={handleOnEnterFilter} */ className="searchButton">
        Buscar
      </button>
      <button /* onClick={handleOnClearFilter} */ className="searchButton">
        Limpar
      </button>
    </div>
  )
}
