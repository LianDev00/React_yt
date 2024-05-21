const API_KEY = '2396d421'

export const searchMovies = async ({ search }) => {
  if (search === '') return null

  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
    const json = await response.json()

    const movies = json.Search

    return movies?.map((movie) => ({
      id: movie.imdbID,
      titulo: movie.Title,
      año: movie.Year,
      imagen: movie.Poster,
    }))
  } catch (e) {
    throw new Error('Error searching movies.')
  }
}
