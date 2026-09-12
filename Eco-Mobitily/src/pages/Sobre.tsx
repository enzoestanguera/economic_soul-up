import { Cabecalho } from '../components/Cabecalho'
import climaImg from '../assets/img/mudancas-climaticas.jpg'
import './Sobre.css'

function Sobre() {
  return (
    <>
      <Cabecalho titulo="Sobre o projeto" />

      <h1>Propósito do Projeto</h1>
      <p>
        Tendo em vista que nós somos o público alvo do projeto que escolhemos nesse Challenge, decidimos pôr
        isso em prática. Passamos por isso todo dia, o que não é difícil acontecer, considerando que andar
        de ônibus, metrô e entre outros meios de transporte são realidade de quase todos os cidadãos do
        planeta. Porém aqui em São Paulo, uma das maiores metrópoles do mundo, é um pouco diferente, estamos
        no top 10 de cidades mais poluentes do planeta, e devemos pensar nisso desde já, essa frase{' '}
        <b>"devemos pensar nisso desde já"</b>, já virou um clichê, desde o Tratado de Paris em 2015, ou o
        Protocolo de Kyoto em 1997. Esses foram grandes momentos onde toda a humanidade se juntou para
        diminuir a emissão de gás carbônico e diminuição do efeito estufa, então, é melhor entrarmos nisso
        agora, do que deixar para depois.
        <br />
        <img src={climaImg} alt="Gráfico Mudanças Climáticas" className="grafico-clima" />
        Nosso projeto visa as pessoas serem recompensadas após fazerem atos saudáveis ao planeta, no nosso
        sistema de contagem e troca de pontos isso é melhor explicado. Onde o usuário pode fazer a troca de
        pontos para créditos imediatamente. Para ganhar pontos, você deve fazer ações sustentáveis e provar
        que fez, assim, cada uma dessas ações gera uma certa quantidade de pontos, os quais você pode trocar
        por créditos para serem usados em transportes públicos. Essa é a ideia inicial, mas nada impede de
        haver parcerias entre empresas, e assim existirem missões especiais, ou existir outras opções para
        troca dos pontos, mas isso é apenas uma virtude no momento.
        <br />
        <br />
        Por fim, nós do grupo apenas gostaríamos de dizer uma última vez que esse projeto é bem importante
        para nós, já que, como dito antes, somos o público alvo, e queremos que isso funcione, de verdade. O
        sucesso de um projeto como esse, é o sucesso de todo o Mundo, mesmo que seja pouco, com isso ajudamos
        o meio ambiente, prolongamos a vida do nosso planeta, para que assim, novos projetos como esse
        possam aparecer no futuro.
      </p>
    </>
  )
}

export default Sobre
