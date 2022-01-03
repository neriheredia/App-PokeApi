import React from 'react'
import Pagination from '../Pagination/Pagination';
import Pokemon from '../Pokemon/Pokemon';
import './Pokedex.css'

const Pokedex = ({ pokemons, page, setPage, total, loading }) => {
    const lastPage = () => {
        const nextPage = Math.max(page - 1, 0)
        setPage(nextPage)
    }

    const nextPage = () => {
        const nextPage = Math.min(page + 1, total)
        setPage(nextPage)
    }

    return (
        <div>
            <div className="header" >
                <h1>Pokedex</h1>
                <Pagination
                    page={page + 1}
                    totalPages={111}
                    onLeftClick={lastPage}
                    onRightClick={nextPage}
                />
            </div>
            {
                loading ? <div> Cargando pokemons...</div> :
                    <div className="pokedex-grid">
                        {pokemons.map((pokemon, idx) => {
                            return <Pokemon pokemon={pokemon} key={pokemon.name} />;
                        })}
                    </div>
            }
        </div>
    )
}

export default Pokedex
