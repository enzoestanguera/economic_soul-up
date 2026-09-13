import { Cabecalho } from '../components/Cabecalho'
import whatsappImg from '../assets/img/whatsapp.jpg'
import './Contato.css'

function Contato() {
  return (
    <>
      <Cabecalho titulo="Como gostaria de nos contatar?" />

      <main className="contato-container">
        <div className="contatos">
          <h2>Meios de Contato</h2>

          <img
            src={whatsappImg}
            alt="Logo Whatsapp"
            className="icone-contato"
          />

          <p>
            <b>WhatsApp:</b> (11) 94357-8228
          </p>

          <p>
            <b>E-mail:</b> giovanedc2007@gmail.com
          </p>
        </div>
      </main>
    </>
  )
}

export default Contato