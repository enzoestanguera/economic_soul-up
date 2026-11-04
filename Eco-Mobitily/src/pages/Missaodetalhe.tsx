import { useCallback, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import EstadoRequisicao from '../components/EstadoRequisicao'
import { useApi } from '../hooks/useApi'
import { getMissaoPorId } from '../services/api'

export default function MissaoDetalhe() {
  const { id } = useParams<{ id: string }>()

  // useCallback mantém a função estável: o useApi só busca de novo quando o id muda.
  const buscarMissao = useCallback(() => {
    if (!id) return Promise.reject(new Error('Identificador de missão inválido.'))
    return getMissaoPorId(id)
  }, [id])

  const { dados: missao, carregando, erro, recarregar } = useApi(buscarMissao)

  // useEffect: sincroniza o título da aba do navegador com a missão carregada.
  useEffect(() => {
    const tituloAnterior = document.title

    if (missao) {
      document.title = `${missao.nome} | SoulUp`
    }

    return () => {
      document.title = tituloAnterior
    }
  }, [missao])

  return (
    <>
      <main className="mx-auto w-full max-w-[720px] px-4 py-8 md:px-6 md:py-12">
        <Link
          to="/missoes"
          className="mb-6 inline-flex items-center gap-1 text-sm font-semibold text-azure no-underline transition-colors hover:text-indigo hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azure"
        >
          <span aria-hidden="true">←</span> Voltar para missões
        </Link>

        <EstadoRequisicao
          carregando={carregando}
          erro={erro}
          vazio={false}
          mensagemVazio=""
          onTentarNovamente={recarregar}
        />

        {!carregando && !erro && missao && (
          <article className="rounded-2xl border border-line border-t-4 border-t-leaf bg-surface p-6 shadow-md sm:p-8">
            <span className="mb-2 block text-sm font-semibold text-leaf">
              Missão #{id}
            </span>

            <h1 className="mb-3 mt-0 font-display text-2xl font-bold text-indigo-dark md:text-3xl">
              {missao.nome}
            </h1>

            <p className="mb-6 mt-0 leading-relaxed text-muted">{missao.descricao}</p>

            <dl className="m-0 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-xl bg-leaf-light p-4">
                <dt className="text-xs font-semibold uppercase tracking-wide text-leaf">
                  Pontos
                </dt>
                <dd className="m-0 mt-1 font-display text-2xl font-bold text-ink">
                  {missao.pontos ?? 0}
                </dd>
              </div>

              <div className="rounded-xl bg-azure/10 p-4">
                <dt className="text-xs font-semibold uppercase tracking-wide text-azure">
                  CO₂ economizado
                </dt>
                <dd className="m-0 mt-1 font-display text-2xl font-bold text-ink">
                  {(missao.co2Economizado ?? 0).toLocaleString('pt-BR')} kg
                </dd>
              </div>
            </dl>
          </article>
        )}
      </main>

      <footer className="w-full bg-[#231b54] px-10 py-6 text-white max-[640px]:px-4 max-[640px]:py-5">
        <p className="m-0">&copy; Todos os direitos reservados — ECO Mobility SoulUp — 2026</p>
      </footer>
    </>
  )
}