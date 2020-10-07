import React from 'react'
import { connect } from 'react-redux'
import { addToCart, decTotal, incTotal, removeFromCart } from '../action/action'

//renders item component when in cart
function CartItem(props){
    //decrements the amount of this specific item
    const handleDelete = (e) => {
        e.preventDefault()
        props.dec(props.price)
        props.delete(props.id)
    }

    //increments the amount of this specific item
    const handleAdd = (e) => {
        e.preventDefault()
        props.add(props.id, props.name, props.price)
        console.log(props.price)
        props.inc(props.price)
    }

    return(
        <div className="cart-item">
            <div className="cart-item-name">{props.name}</div>
            <div className="cart-item-price">${props.price}</div>
            <div className="btn" onClick={handleDelete}>-</div>
            <div className="cart-item-amt">{props.quantity}</div>
            <div className="btn" onClick={handleAdd}>+</div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        add: (id, name, price) => dispatch(addToCart(id, name, price)),
        delete: (id) => dispatch(removeFromCart(id)),
        inc: (price) => dispatch(incTotal(price)),
        dec: (price) => dispatch(decTotal(price))
    }
}

export default connect(null, mapDispatchToProps)(CartItem)