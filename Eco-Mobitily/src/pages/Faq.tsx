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
      </section>
    </>
  )
}

export default Faq