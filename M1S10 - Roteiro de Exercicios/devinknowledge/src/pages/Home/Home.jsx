export const Home = () => {
  return (
    <>
      <title>DEVinKnowledge</title>
      <div className="body">
        <aside>
          <form id="form">
            <header>
              {/* svg */}
              <div className="logo">
                <h1>
                  DEVin<span>Knowledge</span>
                </h1>
                <p>Learn, Code and Save</p>
              </div>
            </header>
            <div className="input-wrapper">
              <label htmlFor="title">Título*</label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Digite um título"
                required
                minLength="8"
                maxLength="64"
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="skill">Linguagem/Skill*</label>
              <input
                type="text"
                name="skill"
                id="skill"
                placeholder="Digite uma linguagem ou skill"
                required
                minLength="4"
                maxLength="16"
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="category">Categoria*</label>
              <select name="category" id="category" required>
                <option value="none" disabled selected>
                  Selecione uma categoria
                </option>
                <option value="Front-End">Front-End</option>
                <option value="Back-End">Back-End</option>
                <option value="FullStack">FullStack</option>
                <option value="SoftSkill">SoftSkill</option>
              </select>
            </div>

            <div className="input-wrapper">
              <label htmlFor="description">Descrição*</label>
              <textarea
                name="description"
                id="description"
                placeholder="Escreva aqui o detalhamento da sua dica..."
                minLength="32"
                maxLength="512"
                required
              ></textarea>
            </div>
            <div className="input-wrapper">
              <label htmlFor="video">Link para video no YouTube:</label>
              <input type="url" name="video" id="video" />
            </div>
            <div className="button-wrapper">
              <button id="clear" type="reset">
                Limpar
              </button>
              <button id="save" type="submit">
                Salvar
              </button>
              <button id="saveEdit" type="submit" className="hidden">
                Finalizar Edição
              </button>
            </div>
          </form>
        </aside>
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
          <main></main>
        </section>
      </div>
    </>
  )
}
