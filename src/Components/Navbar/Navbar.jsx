import { useContext } from 'react'
import './Navbar.css'
import { AiFillHeart } from "react-icons/ai";
import FavoriteContext from '../../context/favoriteContext'
const Logo = 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png';


const Navbar = () => {
    const { favoritePokemons } = useContext(FavoriteContext)
    return (
        <>
            <nav>
                <div />
                <div>
                    <img
                        src={Logo}
                        alt="LogoApi"
                        className="navbar-image"
                    />
                </div>
                <div>
                    <AiFillHeart className='redHeartNav' />
                    {favoritePokemons.length}
                </div>
                <div />
            </nav>
        </>
    )
}

export default Navbar
