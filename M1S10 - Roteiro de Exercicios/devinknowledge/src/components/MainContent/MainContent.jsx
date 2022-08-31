export const MainContent = () => {
  return (
    <section className="right-side">
      <nav>
        <button id="total">
          <h3>Total</h3>
          <span className="totalCounter"></span>
        </button>
        <button id="frontEndButton">
          <h3>FrontEnd</h3>
          <span className="frontEndCounter"></span>
        </button>
        <button id="backEndButton">
          <h3>BackEnd</h3>
          <span className="backEndCounter"></span>
        </button>
        <button id="fullStackButton">
          <h3>FullStack</h3>
          <span className="fullStackCounter"></span>
        </button>
        <button id="SoftSkillButton">
          <h3>SoftSkill</h3>
          <span className="softSkillCounter"></span>
        </button>
      </nav>
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
