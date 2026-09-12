import logoImg from '../assets/img/soulup-logo.png'
import './Cabecalho.css'

export function Cabecalho() {
  return (
    <header className="cabecalho">
      <a href="/" className="cabecalho-link-logo">
        <span className="cabecalho-logo">S</span>
      </a>

      {/* menu de navegação */}
      <nav className="cabecalho-nav" aria-label="Navegação principal">
        <ul className="cabecalho-ul">
          <li className="cabecalho-li">
            <span className="cabecalho-bullet">•</span>
            <a href="/sobre" className="cabecalho-link">
              Sobre
            </a>
          </li>
          <li className="cabecalho-li">
            <span className="cabecalho-bullet">•</span>
            <a href="/integrantes" className="cabecalho-link">
              Integrantes
            </a>
          </li>
          <li className="cabecalho-li">
            <span className="cabecalho-bullet">•</span>
            <a href="/faq" className="cabecalho-link">
              FAQ
            </a>
          </li>
          <li className="cabecalho-li">
            <span className="cabecalho-bullet">•</span>
            <a href="/contato" className="cabecalho-link">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}