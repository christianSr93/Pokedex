import { GenerationInterface, Pokemon } from '../interface/interface'
import { PokedexLayout } from '../components/layout/PokedexLayout'
import { wrapper } from '../appState/store';
import { setPokemon } from '../appState/store/slices/pokemon';

export default function Home() {
  return (
    <>
      <PokedexLayout />
    </>
  )
}

export const getStaticProps = wrapper.getStaticProps(store => async () => {
  const res_gen1 = await fetch('https://pokeapi.co/api/v2/generation/generation-i/')
  const res_gen2 = await fetch('https://pokeapi.co/api/v2/generation/generation-ii/')

  const data_gen1: GenerationInterface = await res_gen1.json()
  const data_gen2: GenerationInterface = await res_gen2.json()
  const data_combined = (data_gen1.pokemon_species).concat(data_gen2.pokemon_species);
 
  const pokemon_list:Pokemon[] = await Promise.all(data_combined.map(async pokemon => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
    const data: any = await response.json()
    const pokemonObject: Pokemon = {
      name: data.name,
      sprite: data.sprites.other.dream_world.front_default,
      types: data.types,
      id: data.id,
      order: data.order,
      stats: data.stats
    }
    return (pokemonObject)
  }))

  store.dispatch(setPokemon(pokemon_list));
  return {
    props: {}
  };
});