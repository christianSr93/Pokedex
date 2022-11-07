import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { AppState } from '..';
import { Pokemon, SliceState } from '../../../interface/interface';

const initialState: SliceState = {
    pokemon_list: [],
    filteredPokemon: [],
    selectedPokemon: {
      name: '',
      sprite: '',
      types: [{
          slot: 0,
          type: {
              name:'',
              url: ''
          }
      }],
      id: 0,
      order: 0,
      stats: [{
          base_stat: 0,
          effort: 0,
          stat: {
              name:'',
              url:''
          }
      }]
    },
    favorites:[],
}
export const PokemonSlice = createSlice({
  name: 'pokemon',
  initialState: initialState,

  reducers: {
    setPokemon: (state, action) => ({
      ...state,
      pokemon_list: (action.payload).sort((a:Pokemon, b:Pokemon) => a.order - b.order),
      filteredPokemon: (action.payload).sort((a:Pokemon, b:Pokemon) => a.order - b.order)
    }),
    setPokemonSelected: (state, action) => {
      state.selectedPokemon = action.payload;
    },
    setPokemonFiltered: (state, action) => {
      state.filteredPokemon = (action.payload).sort((a:Pokemon, b:Pokemon) => a.order - b.order);
    },
    addFavorites: (state, action: PayloadAction<Pokemon>) => {
      state.favorites.push(action.payload)
    },
    removeFavorites: (state, action) => {
      state.favorites = (state.favorites).filter((element:Pokemon) => element.order !== action.payload.order)
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      if (!action.payload.pokemon.pokemon_list) {
        return state;
      }
      state.pokemon_list = action.payload.pokemon.pokemon_list;
      state.filteredPokemon = action.payload.pokemon.pokemon_list;
      state.selectedPokemon = action.payload.pokemon.selectedPokemon;
      state.favorites = action.payload.pokemon.favorites;

    }
  }
});

export const { setPokemon, setPokemonSelected, setPokemonFiltered, addFavorites, removeFavorites } = PokemonSlice.actions;

export const selectPokemon = (state: AppState) => state.pokemon.pokemon_list;
export const filteredPokemon = (state: AppState) => state.pokemon.filteredPokemon;
export const pokemonSelected = (state: AppState) => state.pokemon.selectedPokemon;
export const favorites = (state: AppState) => state.pokemon.favorites;


export default PokemonSlice.reducer;