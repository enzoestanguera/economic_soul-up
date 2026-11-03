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
          {/* seções de contato e formulário entram nos próximos commits */}
        </div>
      </main>

      <footer className="py-6 text-center text-[0.84rem] text-[var(--color-muted)]">
        <p className="m-0">&copy; Todos os direitos reservados — ECO Mobility SoulUp — 2026</p>
      </footer>
    </>
  )
}

export default Contato