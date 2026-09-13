import { useState, type ReactNode } from 'react'
import Cabecalho from '../components/Cabecalho'
import './Faq.css'

type PerguntaFaq = {
  pergunta: string
  resposta: ReactNode
}

const perguntas: PerguntaFaq[] = [
  {
    pergunta: 'O que é a ECO Mobility SoulUp?',
    resposta: (
      <p>
        A ECO Mobility SoulUp é uma proposta de solução voltada a incentivar hábitos sustentáveis
        relacionados à mobilidade. O projeto utiliza gamificação para que o usuário realize missões
        ecológicas, acumule pontos, acompanhe sua evolução e visualize uma estimativa de CO₂ economizado.
      </p>
    ),
  },
  {
    pergunta: 'Quais são as missões?',
    resposta: (
      <>
        <p>As missões representam atividades relacionadas a práticas sustentáveis de mobilidade. No protótipo apresentado no site, elas incluem:</p>
        <ol className="lista-missoes">
          <li>Ônibus Sustentável</li>
          <li>Metrô Inteligente</li>
          <li>Pedalada Verde</li>
          <li>Carona Compartilhada</li>
          <li>Caminhada Saudável</li>
        </ol>
        <p>
          Ao concluir uma missão, o usuário registra sua participação, recebe os pontos correspondentes e
          contribui para o cálculo de sua trajetória ecológica.
        </p>
      </>
    ),
  },
  {
    pergunta: 'Como faço para trocar meus pontos?',
    resposta: (
      <p>
        Os pontos acumulados podem ser utilizados para resgatar os vouchers disponíveis no sistema. Antes
        do resgate, é verificado se o usuário possui pontos suficientes; depois da operação, os pontos
        correspondentes são descontados e o resgate fica registrado no histórico.
      </p>
    ),
  },
  {
    pergunta: 'Como o SoulUp contribui para a sustentabilidade?',
    resposta: (
      <p>
        O SoulUp busca incentivar a adoção de hábitos sustentáveis relacionados à mobilidade por meio de
        missões e recompensas. A aplicação também apresenta uma estimativa de CO₂ economizado a partir das
        missões concluídas, permitindo que o usuário acompanhe esse indicador durante sua trajetória.
      </p>
    ),
  },
  {
    pergunta: 'Quem pode utilizar a solução?',
    resposta: (
      <p>
        A proposta é voltada a usuários que desejam participar de missões relacionadas à mobilidade
        sustentável e acompanhar sua evolução por meio de pontos e indicadores. No projeto desenvolvido, o
        sistema prevê cadastro e autenticação de usuários para acesso às funcionalidades.
      </p>
    ),
  },
  {
    pergunta: 'Quais problemas o SoulUp busca resolver?',
    resposta: (
      <p>
        O projeto parte de desafios relacionados à mobilidade urbana e à necessidade de incentivar hábitos
        mais sustentáveis. A proposta procura transformar esse problema em uma experiência participativa,
        utilizando missões, pontos, níveis e vouchers para estimular o envolvimento do usuário.
      </p>
    ),
  },
  {
    pergunta: 'Como a tecnologia participa da solução?',
    resposta: (
      <p>
        A tecnologia organiza as principais etapas da experiência, como cadastro, missões, pontuação,
        trajetória ecológica, vouchers e histórico. Na implementação Java, essas funcionalidades são
        estruturadas em uma aplicação com entidades, classes DAO e conexão com banco de dados Oracle.
      </p>
    ),
  },
  {
    pergunta: 'O SoulUp rastreia meus deslocamentos por GPS?',
    resposta: (
      <p>
        Não. A integração com GPS e o rastreamento em tempo real de deslocamentos não fazem parte do
        escopo atual do projeto. As missões são registradas pelo usuário dentro da aplicação.
      </p>
    ),
  },
  {
    pergunta: 'Como funciona a trajetória ecológica?',
    resposta: (
      <p>
        A trajetória ecológica acompanha a evolução do usuário com base nos pontos acumulados e nas
        missões concluídas. Ela também apresenta a quantidade de missões realizadas e a estimativa de CO₂
        economizado, além de classificar o usuário em níveis de sustentabilidade.
      </p>
    ),
  },
]

function Faq() {
  const [abertas, setAbertas] = useState<Set<number>>(new Set())
  const [comentario, setComentario] = useState('')
  const [status, setStatus] = useState<'idle' | 'sucesso' | 'erro'>('idle')

  function alternarPergunta(index: number) {
    setAbertas((atual) => {
      const novo = new Set(atual)
      if (novo.has(index)) {
        novo.delete(index)
      } else {
        novo.add(index)
      }
      return novo
    })
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
      <Cabecalho />

      <main>
        <section className="faq-hero container">
          <span className="eyebrow">Dúvidas comuns</span>
          <h1>Perguntas frequentes</h1>
          <p>Reunimos aqui as respostas para as dúvidas que mais recebemos sobre o projeto.</p>
        </section>

        <section className="faq-container">
          {perguntas.map((item, index) => (
            <div className={`faq-item${abertas.has(index) ? ' ativo' : ''}`} key={item.pergunta}>
              <button className="faq-pergunta" type="button" onClick={() => alternarPergunta(index)}>
                {item.pergunta}
              </button>
              <div className="faq-resposta">{item.resposta}</div>
            </div>
          ))}
        </section>

        <section className="comentario-area">
          <div className="caixa-flutuante">
            <h3>Deixe seu comentário</h3>
            <textarea
              id="texto-usuario"
              placeholder="Digite algo aqui..."
              aria-label="Seu comentário"
              value={comentario}
              onChange={(evento) => setComentario(evento.target.value)}
            />
            <button id="btn-enviar-caixa" type="button" onClick={enviarComentario}>
              Enviar comentário
            </button>

            <div
              id="caixa-sucesso"
              className="msg-discreta msg-sucesso"
              style={{ display: status === 'sucesso' ? 'block' : 'none' }}
            >
              Enviado com sucesso!
            </div>
            <div
              id="caixa-erro"
              className="msg-discreta msg-erro"
              style={{ display: status === 'erro' ? 'block' : 'none' }}
            >
              Por favor, digite uma mensagem.
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; Todos os direitos reservados — ECO Mobility SoulUp — 2026</p>
      </footer>
    </>
  )
}

export default Faq
