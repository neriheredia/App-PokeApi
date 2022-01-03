import Navbar from "./Components/Navbar/Navbar";
import SearchBar from "./Components/SearchBar/SearchBar";
import './App.css'
import Pokedex from "./Components/Pokedex/Pokedex";
import { useState, useEffect } from "react";
import { getPokemon, getPokemonData, searchPokemon } from './api'
import { FavoriteProvaider } from './context/favoriteContext'

const localStorageKey = "favorite_pokemon";


function App() {
    const [pokemons, setPokemons] = useState([])
    const [page, setPage] = useState(1)
    const [total, setTotal] = useState(0)
    const [loading, setLoading] = useState(true)
    const [favorites, setFavorites] = useState([])
    const [notFound, setNotFound] = useState(false)
    const [searching, setSearching] = useState(false)

    const fetchPokemon = async () => {
        try {
            setLoading(true)
            const data = await getPokemon(24, 24 * page);
            const promises = data.results.map(async (pokemon) => {
                return await getPokemonData(pokemon.url)
            })
            const results = await Promise.all(promises)
            setPokemons(results)
            setLoading(false)
            setTotal(Math.ceil(data.count / 25))
        } catch (error) {
            console.log(error);
        }
    }

    //Traer Favoritos del LocalStorage
    const loadFavoritePokemons = () => {
        const pokemons = JSON.parse(window.localStorage.getItem(localStorageKey)) || []
        setFavorites(pokemons)
    }

    //Traer Favoritos del LocalStorage
    useEffect(() => {
        loadFavoritePokemons()
    }, [])

    useEffect(() => {
        if (!searching) {
            fetchPokemon();
        }
    }, [page])

    //Guardar Favoritos en el LocalStorage
    const updateFavoritePokemons = (name) => {
        const updated = [...favorites]
        const isFavorite = updated.indexOf(name)
        if (isFavorite >= 0) {
            updated.splice(isFavorite, 1)
        } else {
            updated.push(name)
        }
        setFavorites(updated)
        window.localStorage.setItem(localStorageKey, JSON.stringify(updated))
    }

    const onSearch = async (pokemon) => {
        if (!pokemon) {
            return fetchPokemon()
        }
        setLoading(true)
        setNotFound(false)
        setSearching(true)
        const result = await searchPokemon(pokemon)
        if (!result) {
            setNotFound(true)
            setLoading(false)
            return;
        } else {
            setPokemons([result])
            setPage(0)
            setTotal(1)
        }
        setLoading(false)
        setSearching(false)
    }

    return (
        <FavoriteProvaider value={{
            favoritePokemons: favorites,
            updateFavoritePokemons: updateFavoritePokemons
        }}>
            <div>
                <Navbar />
                <div className="App">
                    <SearchBar onSearch={onSearch} />
                    {notFound ? (
                        <div>No se encontro el Pokemon que buscas</div>
                    ) : (

                        <Pokedex
                            loading={loading}
                            pokemons={pokemons}
                            page={page}
                            setPage={setPage}
                            total={total}
                        />
                    )}
                </div>
            </div>
        </FavoriteProvaider>
    );
}

export default App;
