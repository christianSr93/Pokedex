import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { selectPokemon, setPokemonFiltered, favorites } from '../../../appState/store/slices/pokemon';
import { Pokemon } from "../../../interface/interface"
const TYPES = [
  "all",
  "normal",
	"fire",
	"water",
	"electric",
	"grass",
	"ice",
	"fighting",
	"poison",
	"ground",
	"flying",
	"psychic",
	"bug",
	"rock",
	"ghost",
	"dragon",
	"dark",
	"steel",
	"fairy"
];
const useFilter = () => {
  const initValues = {
    type: "default",
    generation: "all",
    search: "",
  };

  const [type, setType] = useState(initValues.type);
  const [search, setSearch] = useState(initValues.search);
  const [checked, setChecked] = useState(false)
  const pokemon:Pokemon[] = useSelector(selectPokemon);
  const favoritePokemon:Pokemon[] = useSelector(favorites);

  const [pokemon_list, setPokemonList] = useState<Pokemon[]>(pokemon)
  const dispatch = useDispatch()

  const handleType = (evt: any) => {
    console.log("🚀 ~ file: useFilter.tsx ~ line 21 ~ handleType ~ evt", evt)
    setType(evt.target.value);
    setChecked(false);
    setSearch('');
    const newList = pokemon.filter((element) => {
      if(evt.target.value !== 'all'){
        const contain = element.types.some(el => (el.type.name === evt.target.value))
        if(contain){
          return element
        }
      }else{
        return element
      }
    })
    dispatch(setPokemonFiltered(newList))
    setPokemonList(newList)
  };

  const handleSearch = (evt: any) => {
    setSearch(evt.target.value);
  };

  const onSearch = () => {
    setChecked(false);
    if(search !== ''){
      const newList = pokemon_list.filter((element) =>(element.name.toLowerCase()).indexOf(search.toLowerCase()) >-1)
      dispatch(setPokemonFiltered(newList))
    }else{
      const newList = [...pokemon_list]
      dispatch(setPokemonFiltered(newList))
    }
  }

  const handleFavorite = () =>{
    setSearch('');
    if(!checked){
      const newList = pokemon_list.filter(element => favoritePokemon.some(item => item.order === element.order));
      dispatch(setPokemonFiltered(newList))
    }else{
      const newList = [...pokemon_list]
      dispatch(setPokemonFiltered(newList))
    }
    setChecked(prevState => !prevState)
  }

  return {
    type,
    search,
    handleSearch,
    handleType,
    onSearch,
    TYPES,
    checked,
    handleFavorite,
  };
};

export default useFilter;
