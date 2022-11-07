import { useSelector, useDispatch } from 'react-redux'
import { setPokemonSelected, addFavorites, favorites, removeFavorites } from '../../../appState/store/slices/pokemon';
import { Pokemon } from "../../../interface/interface"

const usePokemonCard = (pokemon:Pokemon) => {
    const dispatch = useDispatch();
    const favoritePokemon:Pokemon[] = useSelector(favorites);

    const handlePokemon = () => {
        dispatch(setPokemonSelected(pokemon));
    }

    const addFavorite = () => {
        dispatch(addFavorites(pokemon));
    }

    const isFavorite = ()=>{
        let result;
        if(favoritePokemon.length>0){
            result = favoritePokemon.find(( element ) => element.order === pokemon.order);
        }else{
            result = false;
        }
        return result;
    }

    const removeFavorite = ()=>{
        dispatch(removeFavorites(pokemon))
    }

    return {
        handlePokemon,
        addFavorite,
        removeFavorite,
        isFavorite
    };
};

export default usePokemonCard;
