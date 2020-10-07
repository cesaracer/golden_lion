import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import CartItem from '../components/CartItem'
import {useHistory} from 'react-router-dom'

//renders cart page
function Cart(props){
    const history = useHistory()

    //renders if cart is empty
    if(props.cart.length === 0){
        return(
            <div className="alert">
                <div className="title">
                    <h1>Your cart is empty</h1>
                </div>
                <div className="alert-body">
                    <div className="btn" onClick={() => history.push('/menu')}>Go to menu</div>
                </div>
                
            </div>
        )
    }else{
    //renders if items are in cart
        return(
            <div className="cart">
                <div className="title"><h1>Cart</h1></div>
                {/*displays users items and quantity amount */}
                <div className="cart-container">
                    {
                        props.cart.map(i => <CartItem {...i}/>)
                    }
                </div>
                <div className="cart-summary">
                    <Link className="btn" to="/checkout">Continue to checkout</Link>
                </div>
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return{
        cart: state.cart,
        total: state.cart
    }
}
export default connect(mapStateToProps)(Cart)