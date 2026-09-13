import Cabecalho from '../components/Cabecalho'
import climaImg from '../assets/img/mudancas-climaticas.jpg'
import './Sobre.css'

function Sobre() {
  return (
    <>
      <Cabecalho />

      <main className="container">
        <section className="sobre-hero">
          <span className="eyebrow">Nosso porquê</span>
          <h1>Sobre o ECO Mobility SoulUp</h1>
          <p className="sobre-hero__lead">
            Uma proposta de mobilidade sustentável que transforma ações ecológicas em uma experiência
            gamificada de pontos, evolução e recompensas.
          </p>
        </section>

        <div className="sobre-conteudo">
          <section className="sobre-introducao">
            <h2>O propósito do projeto</h2>
            <p>
              O ECO Mobility SoulUp foi desenvolvido para incentivar a adoção de hábitos sustentáveis
              relacionados à mobilidade. A ideia surgiu a partir do desafio de pensar em soluções para uma
              realidade que faz parte da rotina de muitas pessoas: os deslocamentos urbanos e os impactos
              associados a eles.
            </p>
            <p>
              Em vez de tratar a sustentabilidade apenas como informação, o projeto utiliza uma mecânica de
              gamificação. O usuário participa de missões ecológicas, acumula pontos conforme conclui as
              atividades e consegue visualizar uma estimativa do CO₂ economizado durante sua trajetória.
            </p>
            <img src={climaImg} alt="Gráfico sobre mudanças climáticas" className="grafico-clima" />
            <p className="imagem-legenda">
              A sustentabilidade e a mobilidade urbana são temas centrais na proposta do projeto.
            </p>
          </section>

          <section>
            <div className="recompensa-card">
              <h2>Como funciona a solução</h2>
              <p>
                O funcionamento parte de um ciclo simples. O usuário consulta as missões disponíveis,
                seleciona uma atividade e registra sua conclusão. Cada missão possui uma quantidade de
                pontos associada e uma estimativa de CO₂ economizado, que é utilizada para compor a
                trajetória ecológica.
              </p>
              <p>
                Os pontos acumulados podem ser consultados durante a utilização do sistema e também
                utilizados para o resgate de vouchers. Quando um voucher é resgatado, a operação fica
                registrada no histórico, permitindo acompanhar as recompensas obtidas ao longo da
                experiência.
              </p>
            </div>
          </section>

          <section>
            <div className="recompensa-card">
              <h2>Objetivos do SoulUp</h2>
              <p>
                O primeiro objetivo é incentivar comportamentos sustentáveis relacionados à mobilidade por
                meio de uma experiência simples e participativa. A gamificação ajuda a transformar a
                realização das missões em uma jornada de evolução, na qual o usuário consegue visualizar
                seus resultados.
              </p>
              <p>
                Outro objetivo é tornar o impacto das ações mais perceptível. Além dos pontos, o sistema
                registra a estimativa de CO₂ economizado e apresenta a evolução do usuário por meio de
                níveis de sustentabilidade, criando referências para acompanhar seu progresso.
              </p>
            </div>
          </section>

          <section>
            <div className="recompensa-card">
              <h2>Por que o SoulUp?</h2>
              <p>
                A proposta se diferencia por unir uma questão cotidiana, a mobilidade urbana, a uma
                mecânica de participação e recompensa. O usuário não apenas consulta uma solução: ele
                participa das missões, acumula pontos, acompanha sua trajetória ecológica e pode trocar
                parte desses pontos por vouchers.
              </p>
              <p>
                Essa combinação busca tornar o tema da sustentabilidade mais próximo da rotina e criar um
                incentivo para que o usuário continue participando. O projeto também permite visualizar
                diferentes níveis de evolução: Iniciante Sustentável, Explorador Verde, Guardião Ecológico e
                Mestre da Sustentabilidade.
              </p>
            </div>
          </section>

          <section>
            <div className="recompensa-card">
              <h2>Impacto esperado</h2>
              <p>
                Esperamos que o SoulUp contribua para aumentar o interesse por práticas sustentáveis de
                mobilidade e ajude o usuário a perceber a relação entre suas ações, sua pontuação e a
                estimativa de CO₂ economizado.
              </p>
              <p>
                Como projeto acadêmico, a solução também demonstra como recursos de tecnologia e
                gamificação podem ser utilizados para apoiar uma proposta de impacto positivo, mantendo o
                foco em ações que podem ser registradas e acompanhadas pelo próprio usuário.
              </p>
            </div>
          </section>
        </div>
      </main>

      <footer>
        <p>&copy; Todos os direitos reservados — ECO Mobility SoulUp — 2026</p>
      </footer>
    </>
  )
}

export default Sobre
