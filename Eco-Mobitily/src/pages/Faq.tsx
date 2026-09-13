import { useState } from 'react'
import { Cabecalho } from '../components/Cabecalho'
import './Faq.css'

function Faq() {
  const [abertaIndex, setAbertaIndex] = useState<number | null>(null)
  const [comentario, setComentario] = useState('')
  const [status, setStatus] =
  useState<'idle' | 'sucesso' | 'erro'>('idle')

  function alternarPergunta(index: number) {
  setAbertaIndex((atual) => (atual === index ? null : index))
}

function enviarComentario() {
  if (comentario.trim() !== '') {
    setStatus('sucesso')
    setComentario('')
  } else {
    setStatus('erro')
  }

  setTimeout(() => setStatus('idle'), 4000)
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
            

      <div className="caixa-flutuante">
        <h3>Deixe seu comentário</h3>

        <textarea
          id="texto-usuario"
          placeholder="Digite algo aqui..."
          value={comentario}
          onChange={(evento) => setComentario(evento.target.value)}
        />

        <button id="btn-enviar-caixa" onClick={enviarComentario}>
          Enviar
       </button>

{status === 'sucesso' && (
  <p className="mensagem-sucesso">
    Enviado com sucesso.
  </p>
)}

{status === 'erro' && (
  <p className="mensagem-erro">
    Por favor, digite uma mensagem.
  </p>
)}
      </div>

    </>
  )
}

export default Faq

 