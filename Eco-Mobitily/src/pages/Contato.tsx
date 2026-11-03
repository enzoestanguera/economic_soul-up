import whatsappImg from '../assets/img/whatsapp.jpg'

const itemContato =
  'flex items-center gap-3 min-h-[72px] bg-[var(--color-surface)] p-4 rounded-xl shadow-md'

const textoContato = 'm-0 text-[0.88rem] leading-snug text-[var(--color-ink)] [overflow-wrap:anywhere]'

const linkContato = 'text-[var(--color-ink)] no-underline hover:text-[var(--color-azure)]'

function Contato() {
  return (
    <>
      <main className="mx-auto w-full max-w-[720px] px-4 py-12">
        {/* .contato-intro */}
        <section className="mb-8 text-left">
          <span className="mb-2 block text-[0.84rem] font-semibold text-[var(--color-leaf)]">
            Fale com a SoulDevs
          </span>
          <h1 className="mt-0 mb-3">Entre em contato</h1>
          <p className="m-0 leading-relaxed text-[var(--color-muted)]">
            Escolha um dos nossos canais ou envie uma mensagem pelo formulário. Este espaço foi criado
            para aproximar visitantes do projeto da equipe responsável pelo desenvolvimento do SoulUp.
          </p>
        </section>

        {/* .container-pagina */}
        <div className="flex flex-col gap-8">
          <section
            className="grid grid-cols-3 gap-4 max-[760px]:grid-cols-1"
            aria-labelledby="meios-contato"
          >
            <h2 id="meios-contato" className="col-span-full m-0 max-[760px]:col-auto">
              Meios de contato
            </h2>
            <p className="col-span-full -mt-1 mb-2 text-[0.9rem] leading-relaxed text-[var(--color-muted)]">
              Você pode utilizar nossos canais para tirar dúvidas sobre a proposta, enviar sugestões,
              compartilhar feedback ou buscar mais informações sobre o projeto acadêmico.
            </p>

            {/* WhatsApp (sem grayscale) */}
            <div className={itemContato}>
              <img
                src={whatsappImg}
                alt="Logo do WhatsApp"
                className="size-[34px] shrink-0 rounded-full object-contain"
              />
              <p className={textoContato}>
                <b>WhatsApp</b>
                <br />
                <a
                  href="https://wa.me/5511988884321"
                  target="_blank"
                  rel="noreferrer"
                  className={linkContato}
                >
                  (11) 98888-4321
                </a>
              </p>
            </div>

            {/* E-mail */}
            <div className={itemContato}>
              <svg
                className="size-8 shrink-0 text-[var(--color-ink)]"
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                <path d="m3 7 9 6 9-6"></path>
              </svg>
              <p className={textoContato}>
                <b>E-mail</b>
                <br />
                <a href="mailto:contato@soulup.eco" className={linkContato}>
                  contato@soulup.eco
                </a>
              </p>
            </div>

            {/* Instagram */}
            <div className={itemContato}>
              <svg
                className="size-8 shrink-0 text-[var(--color-ink)]"
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <rect x="3" y="3" width="18" height="18" rx="5"></rect>
                <circle cx="12" cy="12" r="4"></circle>
                <circle cx="17.3" cy="6.7" r="0.8" fill="currentColor" stroke="none"></circle>
              </svg>
              <p className={textoContato}>
                <b>Instagram</b>
                <br />
                <a
                  href="https://instagram.com/soulup.eco"
                  target="_blank"
                  rel="noreferrer"
                  className={linkContato}
                >
                  @soulup.eco
                </a>
              </p>
            </div>
          </section>
        </div>
      </main>

      <footer className="py-6 text-center text-[0.84rem] text-[var(--color-muted)]">
        <p className="m-0">&copy; Todos os direitos reservados — ECO Mobility SoulUp — 2026</p>
      </footer>
    </>
  )
}

export default Contato