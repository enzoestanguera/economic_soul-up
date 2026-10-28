import EstadoRequisicao from '../components/EstadoRequisicao'
import { useApi } from '../hooks/useApi'
import { getUsuarios } from '../services/api'

export default function Ranking() {
  const { dados: usuarios, carregando, erro, recarregar } = useApi(getUsuarios)

  const ordenados = usuarios ? [...usuarios].sort((a, b) => b.pontos - a.pontos) : []

  return (
    <>
      <main className="mx-auto w-full max-w-[1100px] px-4 py-8 md:px-6">
        <section className="mb-8">
          <span className="mb-2 block text-sm font-semibold text-green-600">
            Comunidade
          </span>
          <h1 className="mb-3 font-[Poppins] text-2xl font-bold text-[#1b1947] md:text-3xl">
            Ranking de usuários
          </h1>
          <p className="max-w-prose text-[#33334f]">
            Veja quem mais acumulou pontos com missões de mobilidade sustentável.
          </p>
        </section>

        <EstadoRequisicao
          carregando={carregando}
          erro={erro}
          vazio={!!usuarios && usuarios.length === 0}
          mensagemVazio="Nenhum usuário cadastrado ainda."
          onTentarNovamente={recarregar}
        />

        {!carregando && !erro && ordenados.length > 0 && (
          <ol className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {ordenados.map((usuario, indice) => (
              <li
                key={usuario.email}
                className="flex items-center gap-4 rounded-2xl border border-[#d7ddd9] bg-white p-5 shadow-[0_10px_30px_rgba(23,27,46,0.08)]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#231b54] font-[Poppins] font-bold text-white">
                  {indice + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <h2 className="truncate font-[Poppins] text-base font-bold text-[#1b1947]">
                    {usuario.nome}
                  </h2>
                  <p className="truncate text-xs text-[#5b6172]">{usuario.email}</p>
                </div>
                <span className="shrink-0 rounded-full bg-[#e3f3e8] px-3 py-1 text-xs font-semibold text-[#2f9e5b]">
                  {usuario.pontos} pts
                </span>
              </li>
            ))}
          </ol>
        )}
      </main>

      <footer>
        <p>&copy; Todos os direitos reservados — ECO Mobility SoulUp — 2026</p>
      </footer>
    </>
  )
}