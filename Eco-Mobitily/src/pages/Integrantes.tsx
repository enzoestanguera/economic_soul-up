import Cabecalho from '../components/Cabecalho'
import alvaroImg from '../assets/img/alvaro.jpg'
import arthurImg from '../assets/img/arthur.jpg'
import dhiegoImg from '../assets/img/dhiego.jpg'
import giovaneImg from '../assets/img/giovane.jpg'
import enzoImg from '../assets/img/enzo.jpg'
import './Integrantes.css'

type Integrante = {
  nome: string
  rm: string
  turma: string
  foto: string
  github: string
  linkedin: string
}

const integrantes: Integrante[] = [
  {
    nome: 'Álvaro Morais Holanda',
    rm: '568607',
    turma: '1TDSPF',
    foto: alvaroImg,
    github: 'https://github.com/AlvaroHolanda',
    linkedin: 'https://www.linkedin.com/in/álvaro-holanda-b9bb03322/',
  },
  {
    nome: 'Arthur Arruda da Silva',
    rm: '569593',
    turma: '1TDSPF',
    foto: arthurImg,
    github: 'https://github.com/arthurarrudaa',
    linkedin: 'https://www.linkedin.com/in/arthur-arruda-61aa453b0/',
  },
  {
    nome: 'Dhiego Gozzo Belmonte',
    rm: '571505',
    turma: '1TDSPF',
    foto: dhiegoImg,
    github: 'https://github.com/dhiegobelmonte',
    linkedin: 'https://www.linkedin.com/in/dhiego-belmonte-676440283/',
  },
  {
    nome: 'Giovane Dias Chicoli',
    rm: '569750',
    turma: '1TDSPF',
    foto: giovaneImg,
    github: 'https://github.com/Giovvane',
    linkedin: 'https://www.linkedin.com/in/giovane-dias-chicoli-b06b05384/',
  },
  {
    nome: 'Enzo Torres Estanguera',
    rm: '568937',
    turma: '1TDSPF',
    foto: enzoImg,
    github: 'https://github.com/enzoestanguera',
    linkedin: 'https://www.linkedin.com/in/enzo-estanguera/',
  },
]

function Integrantes() {
  return (
    <>
      <Cabecalho />

      <main className="container">
        <section className="integrantes-hero">
          <span className="eyebrow">Equipe SoulDevs</span>
          <h1>Integrantes do grupo</h1>
          <p>Os cinco estudantes responsáveis por planejar, projetar e desenvolver o ECO Mobility SoulUp.</p>
        </section>

        <div className="integrantes_container">
          {integrantes.map((pessoa) => (
            <article className="integrante_card" key={pessoa.rm}>
              <img src={pessoa.foto} alt={`Foto de ${pessoa.nome}`} className="integrante-foto" />
              <h3>{pessoa.nome}</h3>
              <p>RM: {pessoa.rm}</p>
              <p className="integrante-turma">Turma: {pessoa.turma}</p>
              <div className="integrante_card__links">
                <a href={pessoa.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href={pessoa.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </div>
            </article>
          ))}
        </div>

        <section className="integrantes-sobre">
          <h2>Sobre nós</h2>
          <p>
            Somos os integrantes da equipe SoulDevs e trabalhamos juntos no desenvolvimento do ECO Mobility
            SoulUp, unindo programação, organização e criatividade para transformar a proposta do Challenge
            em uma solução de mobilidade urbana mais sustentável.
          </p>
        </section>
      </main>

      <footer>
        <p>&copy; Todos os direitos reservados — ECO Mobility SoulUp — 2026</p>
      </footer>
    </>
  )
}

export default Integrantes
