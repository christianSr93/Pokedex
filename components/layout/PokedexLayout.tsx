import { Pokemon } from "../../interface/interface"
import { Filters } from "../filters/Filters"
import { PokemonCards } from "../pokemon_card/PokemonCards"
import styles from "./PokedexLayout.module.scss"
import { useSelector } from 'react-redux'
import { filteredPokemon } from '../../appState/store/slices/pokemon';

export const PokedexLayout = () => {
  const pokemon_list:Pokemon[] = useSelector(filteredPokemon);

  return (
    <>
    <Filters></Filters>
    <div className={ styles.container }>
      <div className={ styles.layout }>
          {
          (pokemon_list).map((pokemon) => (
            <PokemonCards key={pokemon.id} pokemon={pokemon} />
          ))
        }
      </div>
    </div>
    </>
  )
}
