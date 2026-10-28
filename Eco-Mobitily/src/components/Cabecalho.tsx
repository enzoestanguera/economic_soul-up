import { Link } from 'react-router-dom'
import './Cabecalho.css'

export function Cabecalho() {
  return (
    <header className="cabecalho">
      <Link to="/" className="cabecalho-link-logo">
        <span className="cabecalho-logo">S</span>
      </Link>

      {/* menu de navegação */}
      <nav className="cabecalho-nav" aria-label="Navegação principal">
        <ul className="cabecalho-ul">
          <li className="cabecalho-li">
            <span className="cabecalho-bullet">•</span>
            <Link to="/sobre" className="cabecalho-link">
              Sobre
            </Link>
          </li>
          <li className="cabecalho-li">
            <span className="cabecalho-bullet">•</span>
            <Link to="/integrantes" className="cabecalho-link">
              Integrantes
            </Link>
          </li>
          <li className="cabecalho-li">
            <span className="cabecalho-bullet">•</span>
            <Link to="/faq" className="cabecalho-link">
              FAQ
            </Link>
          </li>
          <li className="cabecalho-li">
            <span className="cabecalho-bullet">•</span>
            <Link to="/contato" className="cabecalho-link">
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Cabecalho