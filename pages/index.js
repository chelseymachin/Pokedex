import useFetchPokemon from '../useRequest'
import Pokemon from '../components/pokemon'

export default function IndexPage() {
  const { result, error } = useFetchPokemon()
  
  if (error) return <h1>Oops! Something went wrong!</h1>
  if (!result) return <h1>Now loading...</h1>

  return (
    <main className='App'>
      <h1>Pokemon</h1>
      <div>
        {result.results.map((pokemon) => (
          <Pokemon pokemon={pokemon} key={pokemon.name} />
        ))}
      </div>
    </main>
  )
}