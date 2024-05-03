import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = `https://catfact.ninja/fact`

// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`

const CAT_PREFIX_IMAGE_URL = `https://cataas.com/cat/says/`

export function App() {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()
  // const [factError, setFactError] = useState()

  // Para recuperar el texto al cargar la pagina
  useEffect(() => {
    // eslint-disable-next-line no-undef
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => {
        if (!res.ok) throw new Error('No se ha podido recuperar el texto')
        return res.json()
      })
      .then((data) => {
        const { fact } = data
        setFact(fact)

        // const threeFirstWord = fact.split(' ', 3).join(' ')
        // console.log(threeFirstWord)

        // fetch(
        //   `https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=white&json=true`,
        // )
        //   .then((res) => res.json())
        //   .then((response) => {
        //     const { url } = response
        //     console.log(response)
        //     setImageUrl(url)
        //   })
      })
  }, [])

  // Para recuperar la imagen cada vez que tengamos un texto nuevo
  useEffect(() => {
    if (!fact) return

    const threeFirstWord = fact.split(' ', 3).join(' ')

    const encodedFirstWords = encodeURIComponent(threeFirstWord)
    const imageUrl = `${CAT_PREFIX_IMAGE_URL}${encodedFirstWords}?fontSize=50&fontColor=white`

    setImageUrl(imageUrl)
  }, [fact])

  return (
    <main>
      <h1>App de gatitos</h1>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && (
          <img
            src={imageUrl}
            alt={`Imagen extraida de las tres primeras palabras de: "${fact}"`}
          />
        )}
      </section>
    </main>
  )
}
