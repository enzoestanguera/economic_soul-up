import { Cabecalho } from '../components/Cabecalho'
import './Home.css'

function Home() {
  return (
    <>
      <Cabecalho titulo="Início" />

      <main>
        <section>
          <h1 className="index-cabecalho">
            Contextualização Inicial do Projeto
          </h1>

          <p>
            Nós escolhemos o segundo desafio proposto dentro dos 3 possíveis
            no Challenge Soul Up.
          </p>
        </section>

        <section>
          <h2>Pontos Ecológicos</h2>

          <p>
            Os pontos ecológicos fazem parte da proposta desenvolvida pelo
            nosso projeto.
          </p>
        </section>

        <section>
          <h2>Considerações Finais</h2>

          <p>
            Analisando o que o desafio propõe, acreditamos que somos capazes
            de contribuir para melhorar esse cenário.
          </p>
        </section>
      </main>

      <footer>
        <p>
          &copy; Todos os direitos reservados - ECO Mobitily SoulUp - 2026
        </p>
      </footer>
    </>
  )
}

export default Home