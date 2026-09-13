import { Cabecalho } from '../components/Cabecalho'
import metroImg from '../assets/img/metro.jpg'
import './Home.css'

function Home() {
  return (
    <>
      <Cabecalho titulo="Início" />

      <main>
        <section>
          <div>
            <h1 className="index-cabecalho">Contextualização Inicial do Projeto</h1>
            <p>
              Nós escolhemos o segundo desafio proposto dentro dos 3 possíveis no challenge Soul Up. Fizemos
              isso por acabar nos identificando com o problema, altas taxas de cobrança de transporte
              público. E como o segundo desafio propõe melhorar isso, escolhemos ele. Além de tudo isso,
              eles oferecem a mecânica de "pontos ecológicos"
            </p>
          </div>
        </section>

        <div>
          <img src={metroImg} alt="Imagem de Metrô" className="image-index" />
        </div>

        <section>
          <h2>Pontos Ecológicos</h2>
          <p>
            Os pontos ecológicos foi o jeito que resolvemos chamar os pontos que seriam trocados por
            créditos, para serem gastos em transportes públicos. Esse sistema é melhor apresentado em outras
            partes do nosso projeto, onde utilizamos as linguagens Python e Java.
          </p>
        </section>

        <section>
          <h2>Considerações Finais</h2>
          <p>
            Analisando o que o desafio propõe e a nossa experiência atual de vida, acreditamos que somos
            capazes de tentar resolvê-lo e se não, ao menos podemos tentar melhorar esse tópico tão
            desafiador. Se essa foi uma ideia proposta a nós, é porque é um desafio de fato, e precisa ser
            resolvido o mais rápido possível!
          </p>
        </section>
      </main>

      <footer>
        <p>&copy; Todos os direitos reservados - ECO Mobitily SoulUp - 2026</p>
      </footer>
    </>
  )
}

export default Home