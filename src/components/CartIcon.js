import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

//renders cart icon with count display
function CartIcon({count}){
    return(
        <div className="cart-icon">
            <Link to="/cart">
                <div className="cart-icon-count">{count}</div>
                <img src="images/bag.svg"/>
            </Link>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        count: state.count
    }
}

export default connect(mapStateToProps)(CartIcon)