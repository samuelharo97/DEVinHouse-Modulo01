import /* Form */ '@components'
import { useForm } from 'react-hook-form'

const validationObject = {
  required: true
}
const notRequired = {
  required: false
}

export const Sidebar = () => {
  const { register, handleSubmit, reset } = useForm()
  const handleCreateTip = data => {
    console.log(data)
  }
  return (
    <aside>
      <form onSubmit={handleSubmit(handleCreateTip)}>
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
            {...register('title', validationObject)}
            type="text"
            name="title"
            id="title"
            placeholder="Digite um título"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="skill">Linguagem/Skill*</label>
          <input
            {...register('skill', validationObject)}
            type="text"
            name="skill"
            id="skill"
            placeholder="Digite uma linguagem ou skill"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="category">Categoria*</label>
          <select
            {...register('category', validationObject)}
            name="category"
            id="category"
            defaultValue={'none'}
          >
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
            {...register('description', validationObject)}
            name="description"
            id="description"
            placeholder="Escreva aqui o detalhamento da sua dica..."
          ></textarea>
        </div>
        <div className="input-wrapper">
          <label htmlFor="video">Link para video no YouTube:</label>
          <input
            {...register('video', notRequired)}
            type="url"
            name="video"
            id="video"
          />
        </div>
        <div className="button-wrapper">
          <button id="clear" onClick={() => reset()}>
            Limpar
          </button>
          <button id="save" onClick={handleSubmit}>
            Salvar
          </button>
          {/* <button id="saveEdit" type="submit" className="hidden">
            Finalizar Edição
          </button> */}
        </div>
      </form>
    </aside>
  )
}
