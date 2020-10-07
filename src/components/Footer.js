import React from 'react'
import {Link} from 'react-router-dom'

//renders basic footer component
function Footer(){
    return(
        <footer>
            <div className="footer-title">
                <h2>Golden Lion</h2>
            </div>
            <div className="footer-body">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer