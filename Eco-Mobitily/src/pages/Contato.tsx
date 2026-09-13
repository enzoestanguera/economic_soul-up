import { useState, type FormEvent } from 'react'
import { Cabecalho } from '../components/Cabecalho'
import whatsappImg from '../assets/img/whatsapp.jpg'
import './Contato.css'

function Contato() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')

  function handleSubmit(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault()

    alert(
      `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso. Em breve entraremos em contato pelo e-mail: ${email}.`,
    )

    setNome('')
    setEmail('')
    setMensagem('')
  }

  return (
    <>
      <Cabecalho />

      <main className="container contato-main">
        <section className="contato-intro">
          <span className="eyebrow">Fale com a SoulDevs</span>
          <h1>Entre em contato</h1>
          <p>
            Escolha um dos nossos canais ou envie uma mensagem pelo formulário. Este espaço foi criado
            para aproximar visitantes do projeto da equipe responsável pelo desenvolvimento do SoulUp.
          </p>
        </section>

        <div className="container-pagina">
          <section className="contatos" aria-labelledby="meios-contato">
            <h2 id="meios-contato">Meios de contato</h2>
            <p className="contato-explicacao">
              Você pode utilizar nossos canais para tirar dúvidas sobre a proposta, enviar sugestões,
              compartilhar feedback ou buscar mais informações sobre o projeto acadêmico.
            </p>

            <div className="item-contato">
              <img src={whatsappImg} alt="Logo do WhatsApp" className="icone-contato icone-contato--whatsapp" />
              <p>
                <b>WhatsApp</b>
                <br />
                (11) 98888-4321
              </p>
            </div>

            <div className="item-contato">
              <svg className="icone-svg" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={1.8}>
                <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                <path d="m3 7 9 6 9-6"></path>
              </svg>
              <p>
                <b>E-mail</b>
                <br />
                contato@soulup.eco
              </p>
            </div>

            <div className="item-contato">
              <svg className="icone-svg" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={1.8}>
                <rect x="3" y="3" width="18" height="18" rx="5"></rect>
                <circle cx="12" cy="12" r="4"></circle>
                <circle cx="17.3" cy="6.7" r="0.8" fill="currentColor" stroke="none"></circle>
              </svg>
              <p>
                <b>Instagram</b>
                <br />
                @soulup.eco
              </p>
            </div>
          </section>

          <section className="container-contato">
            <form id="meuFormulario" onSubmit={handleSubmit}>
              <h2>Formulário de contato</h2>
              <p>
                Preencha os campos abaixo para enviar dúvidas, sugestões, feedbacks ou comentários sobre o
                ECO Mobility SoulUp. Sua mensagem ajuda a equipe a receber opiniões sobre a proposta e sua
                apresentação.
              </p>

              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                id="nome"
                placeholder="Seu nome completo"
                aria-label="Nome completo"
                value={nome}
                onChange={(evento) => setNome(evento.target.value)}
                required
              />

              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                placeholder="seuemail@exemplo.com"
                aria-label="Seu endereço de email"
                value={email}
                onChange={(evento) => setEmail(evento.target.value)}
                required
              />

              <label htmlFor="mensagem">Mensagem</label>
              <textarea
                id="mensagem"
                placeholder="Escreva sua mensagem..."
                aria-label="Sua mensagem para nós"
                value={mensagem}
                onChange={(evento) => setMensagem(evento.target.value)}
                required
              />

              <button type="submit">Enviar mensagem</button>
            </form>
          </section>
        </div>
      </main>

      <footer>
        <p>&copy; Todos os direitos reservados — ECO Mobility SoulUp — 2026</p>
      </footer>
    </>
  )
}

export default Contato
