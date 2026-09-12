import { Cabecalho } from '../components/Cabecalho'
import alvaroImg from '../assets/img/alvaro.jpg'
import arthurImg from '../assets/img/arthur.jpg'
import dhiegoImg from '../assets/img/dhiego.jpg'
import giovaneImg from '../assets/img/giovane.jpg'
import './Integrantes.css'

type Integrante = {
  nome: string
  rm: string
  foto: string
  github: string
  linkedin: string
}

const integrantes: Integrante[] = [
  {
    nome: 'Álvaro Morais Holanda',
    rm: '568607',
    foto: alvaroImg,
    github: 'https://github.com/AlvaroHolanda',
    linkedin: 'https://www.linkedin.com/in/álvaro-holanda-b9bb03322/?isSelfProfile=true',
  },
  {
    nome: 'Arthur Arruda da Silva',
    rm: '569593',
    foto: arthurImg,
    github: 'https://github.com/arthurarrudaa',
    linkedin: 'https://www.linkedin.com/in/arthur-arruda-61aa453b0/',
  },
  {
    nome: 'Dhiego Gozzo Belmonte',
    rm: '571505',
    foto: dhiegoImg,
    github: 'https://github.com/dhiegobelmonte',
    linkedin: 'https://www.linkedin.com/in/dhiego-belmonte-676440283/',
  },
  {
    nome: 'Giovane Dias Chicoli',
    rm: '569750',
    foto: giovaneImg,
    github: 'https://github.com/Giovvane',
    linkedin: 'https://www.linkedin.com/in/giovane-dias-chicoli-b06b05384/',
  },
]

function Integrantes() {
  return (
    <>
      <Cabecalho titulo="Integrantes do Grupo" />

      <h1 className="integrantes_h1">Integrantes do Grupo</h1>

      <main className="integrantes_container">
        
      </main>

      <footer>
        <h4>&copy;1TDSPG</h4>
      </footer>
    </>
  )
}

export default Integrantes