import { useEffect, useState } from 'react'

const CAT_PREFIX_IMAGE_URL = `https://cataas.com/cat/says/`

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  // Para recuperar la imagen cada vez que tengamos un texto nuevo
  useEffect(() => {
    if (!fact) return

    const threeFirstWord = fact.split(' ', 3).join(' ')

    const encodedFirstWords = encodeURIComponent(threeFirstWord)
    const imageUrl = `${CAT_PREFIX_IMAGE_URL}${encodedFirstWords}?fontSize=50&fontColor=white`

    setImageUrl(imageUrl)
  }, [fact])

  return { imageUrl }
}
