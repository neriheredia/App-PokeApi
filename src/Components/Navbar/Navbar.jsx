import React from 'react'
import './Navbar.css'
const Logo = 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png';

const Navbar = () => {
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
                <div>0</div>
                <div />
            </nav>
        </>
    )
}

export default Navbar
