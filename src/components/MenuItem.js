import React from 'react'
import {connect} from 'react-redux'
import { addToCart, click, incTotal } from '../action/action'

//renders item component when displayed in the menu
function MenuItem(props){
    //increments item count and price on click
    const handleClick = (e) => {
        e.preventDefault()
        props.addToCart(props.id, props.name, props.price)
        props.inc(props.price)
        props.change(true)
    }

    return(
        <div className="menu-item">
            <div className="menu-item-name">{props.name}</div>
            <div className="menu-item-price"><p>${props.price}</p></div>
            <div className="btn" onClick={handleClick}>Add to Cart</div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        status: state.status
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addToCart: (id, name, price) => dispatch(addToCart(id, name, price)),
        inc: (price) => dispatch(incTotal(price)),
        change: (val) => dispatch(click(val))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem)