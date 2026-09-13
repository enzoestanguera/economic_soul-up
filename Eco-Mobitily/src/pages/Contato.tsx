import { useState } from 'react'
import { Cabecalho } from '../components/Cabecalho'
import whatsappImg from '../assets/img/whatsapp.jpg'
import './Contato.css'

function Contato() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')

  
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
        <form id="meuFormulario">
  <h2>Envie uma mensagem</h2>

  <label htmlFor="nome">Nome</label>
  <input
    id="nome"
    type="text"
    value={nome}
    onChange={(evento) => setNome(evento.target.value)}
  />

  <label htmlFor="email">E-mail</label>
  <input
    id="email"
    type="email"
    value={email}
    onChange={(evento) => setEmail(evento.target.value)}
  />

  <label htmlFor="mensagem">Mensagem</label>
  <textarea
    id="mensagem"
    value={mensagem}
    onChange={(evento) => setMensagem(evento.target.value)}
  />

  <button type="submit">
    Enviar
  </button>
</form>
      </main>
    </>
  )
}

export default Contato