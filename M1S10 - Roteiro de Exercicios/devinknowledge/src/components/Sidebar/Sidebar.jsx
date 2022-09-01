export const Sidebar = () => {
  return (
    <aside>
      <form id="form">
        <header>
          <img src="/assets/images/booklogo.png" alt="logo da devinknowledge" />
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
          <select name="category" id="category" defaultValue={'none'} required>
            <option value="none" disabled>
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
  )
}
