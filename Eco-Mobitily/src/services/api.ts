const API_URL: string =
  import.meta.env.VITE_API_URL ?? 'https://soulup-api-78mu.onrender.com/api'

export interface Missao {
  id?: number | string
  idMissao?: number | string
  _id?: string
  nome: string
  descricao: string
  pontos: number
  co2Economizado: number
}

export interface Voucher {
  id: number
  nome: string
  descricao: string
  pontosNecessarios: number
}

export interface Usuario {
  nome: string
  email: string
  pontos: number
}

async function requisitar<T>(caminho: string): Promise<T> {
  let resposta: Response

  try {
    resposta = await fetch(`${API_URL}${caminho}`)
  } catch {
    throw new Error('Não foi possível conectar à API. Tente novamente em instantes.')
  }

  if (!resposta.ok) {
    throw new Error(`A API respondeu com erro ${resposta.status} em ${caminho}.`)
  }

  return (await resposta.json()) as T
}

export function getMissoes(): Promise<Missao[]> {
  return requisitar<Missao[]>('/missoes')
}

// Aceita id numérico, texto (UUID/Mongo) ou outro nome de campo.
// Se a API não mandar id nenhum, usa a posição na lista como identificador.
export function obterIdMissao(missao: Missao, posicao: number): string {
  const id = missao.id ?? missao.idMissao ?? missao._id
  return String(id ?? posicao)
}

export async function getMissaoPorId(id: string): Promise<Missao> {
  const missoes = await requisitar<Missao[]>('/missoes')
  const missao = missoes.find((item, posicao) => obterIdMissao(item, posicao) === id)

  if (!missao) {
    throw new Error('Missão não encontrada.')
  }

  return missao
}

export function getVouchers(): Promise<Voucher[]> {
  return requisitar<Voucher[]>('/vouchers')
}

export function getUsuarios(): Promise<Usuario[]> {
  return requisitar<Usuario[]>('/usuarios')
}