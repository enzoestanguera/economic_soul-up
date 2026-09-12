import logoImg from '../assets/img/soulup-logo.png'

export function Cabecalho() {
  return (
    <header className="cabecalho">
      <a href="/">
        <img src={logoImg} alt="Logo da SoulUp" className="cabecalho-logo" />
      </a>
      <nav className="cabecalho-nav" aria-label="Navegação principal">
        <ul className="cabecalho-ul">
          <li className="cabecalho-li"><a className="cabecalho-bg" href="/sobre">Sobre</a></li>
          <li className="cabecalho-li"><a className="cabecalho-bg" href="/integrantes">Integrantes</a></li>
          <li className="cabecalho-li"><a className="cabecalho-bg" href="/faq">FAQ</a></li>
          <li className="cabecalho-li"><a className="cabecalho-bg" href="/contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  )
}