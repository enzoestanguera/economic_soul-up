import { useState, type ReactNode } from 'react'

type PerguntaFaq = {
  pergunta: string
  resposta: ReactNode
}

const textoResposta = 'm-0 px-4 pb-4 leading-[1.55] text-[var(--color-muted)]'

const listaMissoes =
  'm-0 list-outside list-decimal pr-4 pb-4 pl-[34px] leading-[1.55] text-[var(--color-muted)] [&>li]:mb-[5px] [&>li:last-child]:mb-0'

const perguntas: PerguntaFaq[] = [
  {
    pergunta: 'O que é a ECO Mobility SoulUp?',
    resposta: (
      <p className={textoResposta}>
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
        <p className={textoResposta}>
          As missões representam atividades relacionadas a práticas sustentáveis de mobilidade. No
          protótipo apresentado no site, elas incluem:
        </p>
        <ol className={listaMissoes}>
          <li>Ônibus Sustentável</li>
          <li>Metrô Inteligente</li>
          <li>Pedalada Verde</li>
          <li>Carona Compartilhada</li>
          <li>Caminhada Saudável</li>
        </ol>
        <p className={textoResposta}>
          Ao concluir uma missão, o usuário registra sua participação, recebe os pontos correspondentes e
          contribui para o cálculo de sua trajetória ecológica.
        </p>
      </>
    ),
  },
  {
    pergunta: 'Como faço para trocar meus pontos?',
    resposta: (
      <p className={textoResposta}>
        Os pontos acumulados podem ser utilizados para resgatar os vouchers disponíveis no sistema. Antes
        do resgate, é verificado se o usuário possui pontos suficientes; depois da operação, os pontos
        correspondentes são descontados e o resgate fica registrado no histórico.
      </p>
    ),
  },
  {
    pergunta: 'Como o SoulUp contribui para a sustentabilidade?',
    resposta: (
      <p className={textoResposta}>
        O SoulUp busca incentivar a adoção de hábitos sustentáveis relacionados à mobilidade por meio de
        missões e recompensas. A aplicação também apresenta uma estimativa de CO₂ economizado a partir das
        missões concluídas, permitindo que o usuário acompanhe esse indicador durante sua trajetória.
      </p>
    ),
  },
  {
    pergunta: 'Quem pode utilizar a solução?',
    resposta: (
      <p className={textoResposta}>
        A proposta é voltada a usuários que desejam participar de missões relacionadas à mobilidade
        sustentável e acompanhar sua evolução por meio de pontos e indicadores. No projeto desenvolvido, o
        sistema prevê cadastro e autenticação de usuários para acesso às funcionalidades.
      </p>
    ),
  },
  {
    pergunta: 'Quais problemas o SoulUp busca resolver?',
    resposta: (
      <p className={textoResposta}>
        O projeto parte de desafios relacionados à mobilidade urbana e à necessidade de incentivar hábitos
        mais sustentáveis. A proposta procura transformar esse problema em uma experiência participativa,
        utilizando missões, pontos, níveis e vouchers para estimular o envolvimento do usuário.
      </p>
    ),
  },
  {
    pergunta: 'Como a tecnologia participa da solução?',
    resposta: (
      <p className={textoResposta}>
        A tecnologia organiza as principais etapas da experiência, como cadastro, missões, pontuação,
        trajetória ecológica, vouchers e histórico. Na implementação Java, essas funcionalidades são
        estruturadas em uma aplicação com entidades, classes DAO e conexão com banco de dados Oracle.
      </p>
    ),
  },
  {
    pergunta: 'O SoulUp rastreia meus deslocamentos por GPS?',
    resposta: (
      <p className={textoResposta}>
        Não. A integração com GPS e o rastreamento em tempo real de deslocamentos não fazem parte do
        escopo atual do projeto. As missões são registradas pelo usuário dentro da aplicação.
      </p>
    ),
  },
  {
    pergunta: 'Como funciona a trajetória ecológica?',
    resposta: (
      <p className={textoResposta}>
        A trajetória ecológica acompanha a evolução do usuário com base nos pontos acumulados e nas
        missões concluídas. Ela também apresenta a quantidade de missões realizadas e a estimativa de CO₂
        economizado, além de classificar o usuário em níveis de sustentabilidade.
      </p>
    ),
  },
]

const msgDiscreta = 'mt-[5px] rounded-lg p-2 text-center text-[0.82rem] font-semibold'

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
      <main>
        {/* .faq-hero */}
        <section className="mx-auto max-w-[var(--container-max)] px-6 pt-12 pb-6 text-left max-[480px]:pt-8">
          <span className="mb-2 block text-[0.84rem] font-semibold text-[var(--color-leaf)]">
            Dúvidas comuns
          </span>
          <h1>Perguntas frequentes</h1>
          <p className="m-0 max-w-[66ch] text-[var(--color-muted)]">
            Reunimos aqui as respostas para as dúvidas que mais recebemos sobre o projeto.
          </p>
        </section>

        {/* .faq-container */}
        <section className="mx-auto max-w-[760px] px-6 pt-4 pb-6">
          {perguntas.map((item, index) => {
            const aberta = abertas.has(index)

            return (
              <div
                key={item.pergunta}
                className="mb-4 overflow-hidden rounded-lg border border-[var(--color-line)] bg-[var(--color-surface)]"
              >
                <button
                  type="button"
                  aria-expanded={aberta}
                  onClick={() => alternarPergunta(index)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 border-none bg-transparent p-4 text-left font-[family-name:var(--font-body)] text-[0.98rem] font-semibold text-[var(--color-indigo-dark)] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[var(--color-azure)]"
                >
                  {item.pergunta}
                  <span
                    aria-hidden="true"
                    className={`shrink-0 text-[0.8rem] text-[var(--color-azure)] transition-transform duration-200 ease-in-out ${
                      aberta ? 'rotate-90' : ''
                    }`}
                  >
                    &#10095;
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-[max-height] duration-[250ms] ease-in-out ${
                    aberta ? 'max-h-[500px]' : 'max-h-0'
                  }`}
                >
                  {item.resposta}
                </div>
              </div>
            )
          })}
        </section>

        {/* .comentario-area */}
        <section className="mx-auto max-w-[760px] px-6 pt-4 pb-8 max-[480px]:px-4">
          {/* .caixa-flutuante */}
          <div className="flex w-full flex-col gap-2 rounded-2xl border-t-4 border-t-[var(--color-azure)] bg-[var(--color-surface)] p-6 shadow-md">
            <h3 className="m-0 text-[1.05rem] text-[var(--color-indigo)]">Deixe seu comentário</h3>
            <textarea
              id="texto-usuario"
              placeholder="Digite algo aqui..."
              aria-label="Seu comentário"
              value={comentario}
              onChange={(evento) => setComentario(evento.target.value)}
              className="min-h-[105px] w-full resize-y rounded-lg border border-[var(--color-line)] bg-[var(--color-paper)] p-[10px] font-[family-name:var(--font-body)] text-[0.9rem]"
            />
            <button
              id="btn-enviar-caixa"
              type="button"
              onClick={enviarComentario}
              className="cursor-pointer rounded-lg border-none bg-[var(--color-azure)] p-[10px] font-[family-name:var(--font-body)] font-semibold text-white transition-colors duration-200 ease-in-out hover:bg-[var(--color-indigo)]"
            >
              Enviar comentário
            </button>

            {status === 'sucesso' && (
              <div
                id="caixa-sucesso"
                role="status"
                className={`${msgDiscreta} border border-[#c3e6cb] bg-[var(--color-leaf-light)] text-[#155724]`}
              >
                Enviado com sucesso!
              </div>
            )}
            {status === 'erro' && (
              <div
                id="caixa-erro"
                role="alert"
                className={`${msgDiscreta} border border-[#f5c6cb] bg-[#f8d7da] text-[#721c24]`}
              >
                Por favor, digite uma mensagem.
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="w-full bg-[#231b54] px-10 py-6 text-white [@media(max-width:640px)]:px-4 [@media(max-width:640px)]:py-5 text-center text-[0.84rem]">
        <p className="m-0">&copy; Todos os direitos reservados — ECO Mobility SoulUp — 2026</p>
      </footer>
    </>
  )
}

export default Faq