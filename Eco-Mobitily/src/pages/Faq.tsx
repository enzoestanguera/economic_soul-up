import { Cabecalho } from '../components/Cabecalho'
import './Faq.css'

function Faq() {
  return (
    <>
      <Cabecalho titulo="Perguntas frequentes" />

      <section className="faq-container">
        <h2>Perguntas Frequentes</h2>

        <div className="faq-item">
          <h3>O que é a ECO Mobility?</h3>
          <p>
            A ECO Mobility é uma iniciativa voltada para o desenvolvimento de
            soluções de transporte urbano inteligente e sustentável.
          </p>
        </div>

        <div className="faq-item">
          <h3>Quais são as missões?</h3>
          <ol className="lista-missões">
            <li>Ônibus Sustentável</li>
            <li>Metrô Inteligente</li>
            <li>Pedalada Verde</li>
            <li>Carona Compartilhada</li>
            <li>Caminhada Saudável</li>
          </ol>
        </div>

        <div className="faq-item">
          <h3>Como faço para trocar meus pontos?</h3>
          <p>
            Para trocar seus pontos, você pode acessar nosso sistema, lá você
            terá acesso aos seus pontos, e poderá trocá-los facilmente.
          </p>
        </div>
      </section>
    </>
  )
}

export default Faq