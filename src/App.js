import Navbar from "./Components/Navbar/Navbar";
import SearchBar from "./Components/SearchBar/SearchBar";
import './App.css'
import Pokedex from "./Components/Pokedex/Pokedex";
import { useState, useEffect } from "react";
import { getPokemon, getPokemonData } from './api'

function App() {
    const [pokemons, setPokemons] = useState([])

    const fetchPokemon = async () => {
        try {
            const data = await getPokemon();
            const promises = data.results.map(async (pokemon) => {
                return await getPokemonData(pokemon.url)
            })
            const results = await Promise.all(promises)
            setPokemons(results)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchPokemon();
    }, [])

    return (
        <div>
            <Navbar />
            <div className="App">
                <SearchBar />
                <Pokedex pokemons={pokemons} />
            </div>
        </div>
    );
}

export default App;
