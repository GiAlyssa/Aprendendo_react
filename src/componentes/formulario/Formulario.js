import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto";

function Formulario() {
  return (
    <section className="form">
      <form>
        <h2>Preencha os dados para criar um post</h2>
        <CampoTexto label="Nome" placeholder="Digite seu nome" />
        <CampoTexto label="titulo do seu post" placeholder="Coloque um titulo no seu post" />
        <CampoTexto label="texto do seu post" placeholder="Libere a imaginação nesse texto" />
        <CampoTexto label="Imagem do seu post" placeholder="Fotos sempre são legais, né?" />
        <CampoTexto label="Qual o estilo dessa publicação?" placeholder="com o que esse post mais se identifica,gatah?" />
      </form>
    </section>
  );
}

export default Formulario;