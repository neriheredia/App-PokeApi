import { createContext } from 'react'

const FavoriteContext = createContext({
    favoritePokemons: [],
    updateFavoritePokemons: (id) => null
})

export const FavoriteProvaider = FavoriteContext.Provider;

export default FavoriteContext;