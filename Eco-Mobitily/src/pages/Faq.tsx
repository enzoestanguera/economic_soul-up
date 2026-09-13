import { useState } from 'react'
import { Cabecalho } from '../components/Cabecalho'
import './Faq.css'

function Faq() {
  const [abertaIndex, setAbertaIndex] = useState<number | null>(null)

  function alternarPergunta(index: number) {
    setAbertaIndex((atual) => (atual === index ? null : index))
  }

  return (
    <>
      <Cabecalho titulo="Perguntas frequentes" />

      <section className="faq-container">
        <h2>Perguntas Frequentes</h2>

        <div
          className={`faq-item${abertaIndex === 0 ? ' ativo' : ''}`}
        >
          <button
            className="faq-pergunta"
            onClick={() => alternarPergunta(0)}
          >
            O que é a ECO Mobility?
          </button>

          {abertaIndex === 0 && (
            <div className="faq-resposta">
              <p>
                A ECO Mobility é uma iniciativa voltada para o desenvolvimento de
                soluções de transporte urbano inteligente e sustentável.
              </p>
            </div>
          )}
        </div>

        <div
          className={`faq-item${abertaIndex === 1 ? ' ativo' : ''}`}
        >
          <button
            className="faq-pergunta"
            onClick={() => alternarPergunta(1)}
          >
            Quais são as missões?
          </button>

          {abertaIndex === 1 && (
            <div className="faq-resposta">
              <ol className="lista-missões">
                <li>Ônibus Sustentável</li>
                <li>Metrô Inteligente</li>
                <li>Pedalada Verde</li>
                <li>Carona Compartilhada</li>
                <li>Caminhada Saudável</li>
              </ol>
            </div>
          )}
        </div>

        <div
          className={`faq-item${abertaIndex === 2 ? ' ativo' : ''}`}
        >
          <button
            className="faq-pergunta"
            onClick={() => alternarPergunta(2)}
          >
            Como faço para trocar meus pontos?
          </button>

          {abertaIndex === 2 && (
            <div className="faq-resposta">
              <p>
                Para trocar seus pontos, você pode acessar nosso sistema, lá você
                terá acesso aos seus pontos, e poderá trocá-los facilmente.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default Faq