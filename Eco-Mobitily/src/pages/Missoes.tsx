import EstadoRequisicao from '../components/EstadoRequisicao'
import { useApi } from '../hooks/useApi'
import { getMissoes } from '../services/api'

export default function Missoes() {
  const { dados: missoes, carregando, erro, recarregar } = useApi(getMissoes)

  return (
    <>
      <main className="mx-auto w-full max-w-[1100px] px-4 py-8 md:px-6">
        <section className="mb-8">
          <span className="mb-2 block text-sm font-semibold text-green-600">
            Missões ecológicas
          </span>
          <h1 className="mb-3 font-[Poppins] text-2xl font-bold text-[#1b1947] md:text-3xl">
            Escolha sua missão
          </h1>
          <p className="max-w-prose text-[#33334f]">
            Conclua missões de mobilidade sustentável, acumule pontos e acompanhe o CO₂
            economizado.
          </p>
        </section>

        <EstadoRequisicao
          carregando={carregando}
          erro={erro}
          vazio={!!missoes && missoes.length === 0}
          mensagemVazio="Nenhuma missão disponível no momento."
          onTentarNovamente={recarregar}
        />

        {!carregando && !erro && missoes && missoes.length > 0 && (
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {missoes.map((missao) => (
              <li
                key={missao.id}
                className="flex flex-col rounded-2xl border border-[#d7ddd9] bg-white p-5 shadow-[0_10px_30px_rgba(23,27,46,0.08)]"
              >
                <h2 className="mb-2 font-[Poppins] text-lg font-bold text-[#1b1947]">
                  {missao.nome}
                </h2>
                <p className="mb-4 flex-1 text-sm text-[#33334f]">{missao.descricao}</p>
                <div className="flex flex-wrap gap-2 text-xs font-semibold">
                  <span className="rounded-full bg-[#e3f3e8] px-3 py-1 text-[#2f9e5b]">
                    {missao.pontos} pontos
                  </span>
                  <span className="rounded-full bg-[#e8f3fc] px-3 py-1 text-[#1d8fe1]">
                    {missao.co2Economizado.toLocaleString('pt-BR')} kg CO₂
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </main>

      <footer>
        <p>&copy; Todos os direitos reservados — ECO Mobility SoulUp — 2026</p>
      </footer>
    </>
  )
}