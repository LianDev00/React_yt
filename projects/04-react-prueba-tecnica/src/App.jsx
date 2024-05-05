import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'
// import { Otro } from './Components/Otro'

export function App() {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })
  // const [factError, setFactError] = useState()

  const handleCLick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleCLick}>Texto nuevo</button>
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
