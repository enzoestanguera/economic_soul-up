const API_URL: string =
  import.meta.env.VITE_API_URL ?? 'https://soulup-api-78mu.onrender.com/api'

export interface Missao {
  id: number
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

export function getVouchers(): Promise<Voucher[]> {
  return requisitar<Voucher[]>('/vouchers')
}

export function getUsuarios(): Promise<Usuario[]> {
  return requisitar<Usuario[]>('/usuarios')
}