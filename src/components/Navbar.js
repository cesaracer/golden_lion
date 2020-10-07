import React, { useState } from 'react'
import {Link} from 'react-router-dom'

//renders navbar component
function Navbar(){
    const [name, setName] = useState("")

    //toggles class name to generate menu openning effect
    const toggleMenu = () => {
        if(name === "mobile-menu"){
            setName("mobile-menu open")
        }
        else{
            setName("mobile-menu")
        }
    }

    return(
        <nav>
            <div>
                <h1 className="nav-title">Golden Lion</h1>
            </div>
            {/*is not visible on mobile devices */}
            <ul className="links">
                <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                <li><Link to="/menu" onClick={toggleMenu}>Menu</Link></li>
            </ul>
            <div className="burger" onClick={() => toggleMenu()}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            {/* only visible on mobile devices*/}
            <ul className={name}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/cart">Cart</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar