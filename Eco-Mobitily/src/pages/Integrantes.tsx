import alvaroImg from '../assets/img/alvaro.jpg'
import arthurImg from '../assets/img/arthur.jpg'
import dhiegoImg from '../assets/img/dhiego.jpg'
import giovaneImg from '../assets/img/giovane.jpg'
import enzoImg from '../assets/img/enzo.jpg'

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

const linkCard =
  'rounded-lg border border-[var(--color-line)] bg-[var(--color-paper)] px-3 py-1.5 text-[0.8rem] font-semibold text-[var(--color-ink)] no-underline transition-colors duration-200 hover:border-[var(--color-azure)] hover:text-[var(--color-azure)]'

function Integrantes() {
  return (
    <>
      <main className="mx-auto w-full max-w-[1000px] px-4 py-12">
        {/* .integrantes-hero */}
        <section className="mb-8 max-w-[720px] text-left">
          <span className="mb-2 block text-[0.84rem] font-semibold text-[var(--color-leaf)]">
            Equipe SoulDevs
          </span>
          <h1 className="mt-0 mb-3">Integrantes do grupo</h1>
          <p className="m-0 leading-relaxed text-[var(--color-muted)]">
            Os cinco estudantes responsáveis por planejar, projetar e desenvolver o ECO Mobility SoulUp.
          </p>
        </section>

        {/* .integrantes_container */}
        <div className="grid grid-cols-5 gap-4 max-[900px]:grid-cols-3 max-[640px]:grid-cols-2 max-[420px]:grid-cols-1">
          {integrantes.map((pessoa) => (
            <article
              key={pessoa.rm}
              className="flex flex-col items-center rounded-xl bg-[var(--color-surface)] p-4 text-center shadow-md"
            >
              <img
                src={pessoa.foto}
                alt={`Foto de ${pessoa.nome}`}
                className="size-[100px] shrink-0 rounded-full border-2 border-[var(--color-leaf)] object-cover"
              />
              <h3 className="mt-3 mb-1 text-[0.95rem] leading-snug text-[var(--color-ink)]">
                {pessoa.nome}
              </h3>
              <p className="m-0 text-[0.8rem] text-[var(--color-muted)]">RM: {pessoa.rm}</p>
              <p className="m-0 mt-0.5 text-[0.8rem] font-semibold text-[var(--color-indigo-dark)]">
                Turma: {pessoa.turma}
              </p>

              <div className="mt-auto flex flex-wrap justify-center gap-2 pt-4">
                <a href={pessoa.github} target="_blank" rel="noopener noreferrer" className={linkCard}>
                  GitHub
                </a>
                <a href={pessoa.linkedin} target="_blank" rel="noopener noreferrer" className={linkCard}>
                  LinkedIn
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* .integrantes-sobre */}
        <section className="mx-auto mt-8 w-full max-w-[720px] rounded-2xl border-t-4 border-t-[var(--color-leaf)] bg-[var(--color-surface)] p-6 shadow-md sm:p-8">
          <h2 className="mt-0 mb-2">Sobre nós</h2>
          <p className="m-0 text-[0.9rem] leading-relaxed text-[var(--color-muted)]">
            Somos os integrantes da equipe SoulDevs e trabalhamos juntos no desenvolvimento do ECO Mobility
            SoulUp, unindo programação, organização e criatividade para transformar a proposta do Challenge
            em uma solução de mobilidade urbana mais sustentável.
          </p>
        </section>
      </main>

      <footer className="w-full bg-[#231b54] px-10 py-6 text-white [@media(max-width:640px)]:px-4 [@media(max-width:640px)]:py-5 text-center text-[0.84rem]">
        <p className="m-0">&copy; Todos os direitos reservados — ECO Mobility SoulUp — 2026</p>
      </footer>
    </>
  )
}

export default Integrantes