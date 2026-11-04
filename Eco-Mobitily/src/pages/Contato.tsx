import { useState } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import whatsappImg from '../assets/img/whatsapp.jpg'

const itemContato =
  'flex items-center gap-3 min-h-[72px] bg-[var(--color-surface)] p-4 rounded-xl shadow-md'

const textoContato = 'm-0 text-[0.88rem] leading-snug text-[var(--color-ink)] [overflow-wrap:anywhere]'

const linkContato = 'text-[var(--color-ink)] no-underline hover:text-[var(--color-azure)]'

const labelForm = 'mt-2 text-[0.84rem] font-semibold text-[var(--color-indigo-dark)]'

const campoForm =
  'w-full p-3 bg-[var(--color-paper)] border border-[var(--color-line)] rounded-lg font-[family-name:var(--font-body)] text-[0.9rem] focus:outline-2 focus:outline-[rgba(29,143,225,0.25)] focus:border-[var(--color-azure)]'

const msgErro = 'mt-1 text-[0.8rem] text-red-600'

type FormularioContato = {
  nome: string
  email: string
  mensagem: string
}

function Contato() {
  const [enviadoPara, setEnviadoPara] = useState<FormularioContato | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormularioContato>({
    mode: 'onBlur',
    defaultValues: { nome: '', email: '', mensagem: '' },
  })

  const onSubmit: SubmitHandler<FormularioContato> = async (dados) => {
    // Simula o envio. Quando existir endpoint, troque por um fetch/POST aqui.
    await new Promise((resolve) => setTimeout(resolve, 600))

    setEnviadoPara(dados)
    reset()
  }

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
          {/* .contatos */}
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

          {/* .container-contato */}
          <section className="w-full">
            <form
              id="meuFormulario"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="flex w-full flex-col gap-2 rounded-2xl border-t-4 border-t-[var(--color-leaf)] bg-[var(--color-surface)] p-6 shadow-md sm:p-8"
            >
              <h2 className="mt-0 mb-1">Formulário de contato</h2>
              <p className="m-0 mb-2 text-[0.88rem] leading-relaxed text-[var(--color-muted)]">
                Preencha os campos abaixo para enviar dúvidas, sugestões, feedbacks ou comentários sobre o
                ECO Mobility SoulUp. Sua mensagem ajuda a equipe a receber opiniões sobre a proposta e sua
                apresentação.
              </p>

              <label htmlFor="nome" className={labelForm}>
                Nome
              </label>
              <input
                type="text"
                id="nome"
                placeholder="Seu nome completo"
                autoComplete="name"
                aria-invalid={errors.nome ? 'true' : 'false'}
                aria-describedby={errors.nome ? 'erro-nome' : undefined}
                className={campoForm}
                {...register('nome', {
                  required: 'Informe seu nome.',
                  minLength: { value: 3, message: 'O nome deve ter pelo menos 3 caracteres.' },
                  maxLength: { value: 80, message: 'O nome deve ter no máximo 80 caracteres.' },
                  validate: (valor) => valor.trim().length >= 3 || 'Informe um nome válido.',
                })}
              />
              {errors.nome && (
                <p id="erro-nome" role="alert" className={msgErro}>
                  {errors.nome.message}
                </p>
              )}

              <label htmlFor="email" className={labelForm}>
                E-mail
              </label>
              <input
                type="email"
                id="email"
                placeholder="seuemail@exemplo.com"
                autoComplete="email"
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'erro-email' : undefined}
                className={campoForm}
                {...register('email', {
                  required: 'Informe seu e-mail.',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                    message: 'Digite um e-mail válido, como nome@exemplo.com.',
                  },
                })}
              />
              {errors.email && (
                <p id="erro-email" role="alert" className={msgErro}>
                  {errors.email.message}
                </p>
              )}

              <label htmlFor="mensagem" className={labelForm}>
                Mensagem
              </label>
              <textarea
                id="mensagem"
                placeholder="Escreva sua mensagem..."
                aria-invalid={errors.mensagem ? 'true' : 'false'}
                aria-describedby={errors.mensagem ? 'erro-mensagem' : undefined}
                className={`${campoForm} min-h-[130px] resize-y`}
                {...register('mensagem', {
                  required: 'Escreva sua mensagem.',
                  minLength: { value: 10, message: 'A mensagem deve ter pelo menos 10 caracteres.' },
                  maxLength: { value: 500, message: 'A mensagem deve ter no máximo 500 caracteres.' },
                })}
              />
              {errors.mensagem && (
                <p id="erro-mensagem" role="alert" className={msgErro}>
                  {errors.mensagem.message}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 w-full cursor-pointer rounded-lg border-none bg-[var(--color-leaf)] p-3 font-[family-name:var(--font-body)] font-bold text-white transition-[background-color,transform] duration-200 ease-in-out hover:-translate-y-px hover:bg-[var(--color-indigo)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
              </button>

              {enviadoPara && (
                <p
                  role="status"
                  className="mt-3 rounded-lg bg-[var(--color-leaf-light)] p-3 text-[0.88rem] text-[var(--color-ink)]"
                >
                  Obrigado, {enviadoPara.nome}! Sua mensagem foi enviada com sucesso. Em breve
                  entraremos em contato pelo e-mail: {enviadoPara.email}.
                </p>
              )}
            </form>
          </section>
        </div>
      </main>

      <footer className="w-full bg-[#231b54] px-10 py-6 text-white [@media(max-width:640px)]:px-4 [@media(max-width:640px)]:py-5 text-center text-[0.84rem]">
        <p className="m-0">&copy; Todos os direitos reservados — ECO Mobility SoulUp — 2026</p>
      </footer>
    </>
  )
}

export default Contato