import React, { useState } from 'react'
import { searchPokemon } from '../../api'
import './SearchBar.css'

const SearchBar = () => {
    const [search, setSearch] = useState('')
    const [pokemon, setPokemon] = useState()

    const onChange = e => {
        setSearch(e.target.value)
    }

    const onClick = async (e) => {
        const data = await searchPokemon(search)
        console.log(data);
        setPokemon(data);
    }

    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input
                    placeholder="Buscar pokemon..."
                    onChange={onChange}
                />
            </div>
            <div>
                <button className="searchbar-btn" onClick={onClick} >Buscar</button>
            </div>
        </div>
    )
}

export default SearchBar
