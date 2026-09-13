import Cabecalho from '../components/Cabecalho'
import metroImg from '../assets/img/metro.jpg'
import './Home.css'

function Home() {
  return (
    <>
      <Cabecalho />

      <main className="container">
        <section className="hero">
          <span className="eyebrow hero__eyebrow">Challenge Soul Up · Mobilidade Urbana</span>
          <h1 className="index-cabecalho">Mobilidade urbana mais sustentável, uma missão de cada vez</h1>
          <p>
            O ECO Mobility SoulUp nasceu a partir do desafio de pensar em alternativas para problemas
            relacionados à mobilidade urbana. Como usuários de transporte público, identificamos uma
            realidade que faz parte do nosso cotidiano e buscamos transformá-la em uma oportunidade para
            incentivar escolhas mais sustentáveis.
          </p>
          <p>
            Para isso, o projeto utiliza gamificação: o usuário realiza missões ecológicas, acumula pontos
            de acordo com as ações concluídas e acompanha uma estimativa do CO₂ economizado. Dessa forma, a
            experiência transforma atitudes sustentáveis em uma trajetória que pode ser acompanhada ao
            longo do tempo.
          </p>
        </section>

        <div className="hero__imagem-wrap">
          <img
            src={metroImg}
            alt="Estação de metrô, um dos meios de transporte contemplados pelo projeto"
            className="image-index"
          />
        </div>

        <section className="secao">
          <h2>O que é o SoulUp?</h2>
          <p>
            O SoulUp é uma proposta de solução de mobilidade sustentável baseada em recompensas. Em vez de
            apenas apresentar informações sobre sustentabilidade, o projeto cria uma dinâmica em que ações
            relacionadas à mobilidade podem gerar pontos e contribuir para a evolução ecológica do usuário.
          </p>
          <p>
            O sistema também permite consultar missões, acompanhar pontos, visualizar a trajetória
            ecológica, avançar por níveis de sustentabilidade e utilizar os pontos acumulados no resgate de
            vouchers disponíveis.
          </p>
        </section>

        <section className="secao">
          <h2>Como a solução funciona</h2>
          <p>
            A lógica é simples: o usuário escolhe uma missão disponível, realiza a atividade e registra sua
            conclusão. A missão concluída gera a quantidade de pontos correspondente e sua estimativa de
            CO₂ economizado passa a compor a trajetória ecológica.
          </p>
          <p>
            Conforme acumula pontos, o usuário pode acompanhar sua evolução e alcançar diferentes níveis de
            sustentabilidade. Os pontos também podem ser utilizados para resgatar vouchers, tornando a
            experiência mais participativa e recompensadora.
          </p>
        </section>

        <section className="secao">
          <h2>Impacto esperado</h2>
          <p>
            O principal impacto esperado é incentivar a adoção de hábitos mais sustentáveis relacionados à
            mobilidade, mostrando ao usuário que pequenas ações podem ser registradas, acompanhadas e
            valorizadas dentro de uma jornada ecológica.
          </p>
          <p>
            Ao reunir missões, pontuação, níveis e estimativa de CO₂ economizado, o SoulUp busca tornar o
            tema mais próximo da rotina das pessoas e estimular a participação contínua em práticas
            sustentáveis.
          </p>
        </section>

        <section className="secao">
          <h2>Considerações finais</h2>
          <p>
            O SoulUp surgiu da nossa identificação com o problema apresentado no Challenge e da vontade de
            transformar uma questão presente no cotidiano em uma solução prática e gamificada. A proposta
            combina mobilidade, tecnologia e recompensas para incentivar uma participação mais ativa do
            usuário.
          </p>
          <p>
            Mais do que acumular pontos, a ideia é permitir que cada missão concluída faça parte de uma
            trajetória ecológica mensurável, aproximando o usuário do impacto positivo de suas escolhas e
            dando continuidade ao propósito de construir uma mobilidade mais sustentável.
          </p>
        </section>
      </main>

      <footer>
        <p>&copy; Todos os direitos reservados — ECO Mobility SoulUp — 2026</p>
      </footer>
    </>
  )
}

export default Home
