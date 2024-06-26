import './App.css'

//import { useRef } from 'react'
import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movies'
import { useState, useEffect, useRef } from 'react'

function useSearch() {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }
    if (search === '') {
      setError('No se puede buscar una pelicula vacia.')
      return
    }
    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una pelicula con un numero.')
      return
    }
    if (search.length < 3) {
      setError('La pelicula debe tener al menos 3 caracteres.')
      return
    }
    setError(null)
  }, [search])

  return { search, updateSearch, error }
}

function App() {
  const { search, updateSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({ search })
  //const inputRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    // const fields = Object.fromEntries(new window.FormData(event.target))
    // console.log(fields)
    getMovies()
  }

  const handleChange = (event) => {
    updateSearch(event.target.value)
  }

  return (
    <div className="page">
      <header>
        <h1>BUSCADOR DE PELICULAS</h1>
        <form className="form" onSubmit={handleSubmit}>
          <label>Ingresa la pelicula que estas buscando:</label>
          <input
            onChange={handleChange}
            value={search}
            name="search"
            type="text"
            placeholder="Dune, Star Wars, The Matrix ..."
          />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>{loading ? <p>Cargando...</p> : <Movies movies={movies} />}</main>
    </div>
  )
}

export default App
