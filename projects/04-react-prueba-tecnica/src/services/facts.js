const CAT_ENDPOINT_RANDOM_FACT = `https://catfact.ninja/fact`

export const getRandomFact = async () => {
  // eslint-disable-next-line no-undef
  const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  if (!res.ok) throw new Error('No se ha podido recuperar el texto')
  const data = await res.json()
  const { fact } = data
  return fact
}

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
