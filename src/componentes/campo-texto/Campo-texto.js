import './Campo-texto.css'

const CampoTexto =(props) => {
    return (
      <div className="campo-texto">
        <label>Nome</label>
        <input placeholder='Digite seu nome'/>
      </div>
    )
}

export default CampoTexto