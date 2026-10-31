import EstadoRequisicao from '../components/EstadoRequisicao'
import { useApi } from '../hooks/useApi'
import { getVouchers } from '../services/api'

export default function Vouchers() {
  const { dados: vouchers, carregando, erro, recarregar } = useApi(getVouchers)

  return (
    <>
      <main className="mx-auto w-full max-w-[1100px] px-4 py-8 md:px-6">
        <section className="mb-8">
          <span className="mb-2 block text-sm font-semibold text-green-600">
            Recompensas
          </span>
          <h1 className="mb-3 font-[Poppins] text-2xl font-bold text-[#1b1947] md:text-3xl">
            Vouchers disponíveis
          </h1>
          <p className="max-w-prose text-[#33334f]">
            Use os pontos acumulados nas missões para resgatar vouchers.
          </p>
        </section>

        <EstadoRequisicao carregando={carregando} erro={erro} vazio={!!vouchers && vouchers.length === 0} mensagemVazio="Nenhum voucher disponível no momento." onTentarNovamente={recarregar}/>

        {!carregando && !erro && vouchers && vouchers.length > 0 && (
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
           {vouchers.map((voucher, index) => (
          <li key={voucher.id ?? index} className="flex flex-col rounded-2xl border border-[#d7ddd9] bg-white p-5 shadow-[0_10px_30px_rgba(23,27,46,0.08)]">
            <h2 className="mb-2 font-[Poppins] text-lg font-bold text-[#1b1947]">
              {voucher.nome}
            </h2>
            <p className="mb-4 flex-1 text-sm text-[#33334f]">{voucher.descricao}</p>
            <span className="self-start rounded-full bg-[#e3f3e8] px-3 py-1 text-xs font-semibold text-[#2f9e5b]">
              {voucher.pontosNecessarios} pontos
            </span>
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