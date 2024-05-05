import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/facts'

export function useCatFact() {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getRandomFact().then((newFact) => setFact(newFact))
  }

  // Para recuperar el texto al cargar la pagina
  useEffect(refreshFact, [])

  return { fact, refreshFact }
}
