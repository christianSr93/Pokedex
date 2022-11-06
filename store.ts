import { configureStore } from '@reduxjs/toolkit'
import pokemonReducer from './appState/store'

export const store = configureStore({
    reducer: {
        pokemon_list: pokemonReducer
    },
  })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch