import { useCallback, useEffect, useState } from 'react'

type EstadoApi<T> = {
  dados: T | null
  carregando: boolean
  erro: string | null
}

export function useApi<T>(buscar: () => Promise<T>) {
  const [estado, setEstado] = useState<EstadoApi<T>>({
    dados: null,
    carregando: true,
    erro: null,
  })
  const [tentativa, setTentativa] = useState(0)

  useEffect(() => {
    let cancelado = false

    setEstado((anterior) => ({ ...anterior, carregando: true, erro: null }))

    buscar()
      .then((dados) => {
        if (!cancelado) setEstado({ dados, carregando: false, erro: null })
      })
      .catch((erro: unknown) => {
        if (!cancelado) {
          setEstado({
            dados: null,
            carregando: false,
            erro: erro instanceof Error ? erro.message : 'Erro inesperado.',
          })
        }
      })

    return () => {
      cancelado = true
    }
  }, [buscar, tentativa])

  const recarregar = useCallback(() => setTentativa((valor) => valor + 1), [])

  return { ...estado, recarregar }
}