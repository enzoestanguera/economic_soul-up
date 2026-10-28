type EstadoRequisicaoProps = {
  carregando: boolean
  erro: string | null
  vazio: boolean
  mensagemVazio: string
  onTentarNovamente: () => void
}

export default function EstadoRequisicao({
  carregando,
  erro,
  vazio,
  mensagemVazio,
  onTentarNovamente,
}: EstadoRequisicaoProps) {
  if (carregando) {
    return (
      <p role="status" className="py-10 text-center text-[#5b6172]">
        Carregando dados...
      </p>
    )
  }

  if (erro) {
    return (
      <div
        role="alert"
        className="mx-auto max-w-md rounded-2xl border border-red-200 bg-red-50 p-6 text-center"
      >
        <p className="mb-4 text-red-700">{erro}</p>
        <button
          type="button"
          onClick={onTentarNovamente}
          className="rounded-xl bg-[#231b54] px-5 py-2 text-sm font-medium text-white hover:opacity-90"
        >
          Tentar novamente
        </button>
      </div>
    )
  }

  if (vazio) {
    return <p className="py-10 text-center text-[#5b6172]">{mensagemVazio}</p>
  }

  return null
}