import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { selectPokemon, setPokemonFiltered } from '../../../appState/store/slices/pokemon';
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
  const pokemon:Pokemon[] = useSelector(selectPokemon);
  const [pokemon_list, setPokemonList] = useState<Pokemon[]>(pokemon)
  const dispatch = useDispatch()

  const handleType = (evt: any) => {
    console.log("🚀 ~ file: useFilter.tsx ~ line 21 ~ handleType ~ evt", evt)
    setType(evt.target.value);
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
    if(search !== ''){
      const newList = pokemon_list.filter((element) =>(element.name.toLowerCase()).indexOf(search.toLowerCase()) >-1)
      dispatch(setPokemonFiltered(newList))
    }else{
      const newList = [...pokemon_list]
      dispatch(setPokemonFiltered(newList))
    }
  }

  return {
    type,
    search,
    handleSearch,
    handleType,
    onSearch,
    TYPES
  };
};

export default useFilter;
