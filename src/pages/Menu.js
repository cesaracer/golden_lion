import React from 'react'
import MenuItem from '../components/MenuItem'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { click } from '../action/action'

//renders menu page
function Menu(props){
    //menu items
    const food = [
        {
            id: 1,
            name: 'Lo Mein',
            price: 6.95
        },
        {
            id: 2,
            name: 'Chow Mein',
            price: 6.95
        },
        {
            id: 3,
            name: 'Fried Noodles',
            price: 5.95
        },
        {
            id: 4,
            name: 'Udon',
            price: 8.95
        },
        {
            id: 5,
            name: 'Vegetable Stir Fry',
            price: 3.95
        },
        {
            id: 6,
            name: 'Orange Chicken',
            price: 3.95
        },
        {
            id: 7,
            name: 'Sesame Chicken',
            price: 3.95
        },
        {
            id: 8,
            name: 'Pepper Beef',
            price: 4.95
        },
        {
            id: 9,
            name: 'Broccoli Beef',
            price: 4.95
        },
        {
            id: 10,
            name: 'Dumplings',
            price: 4.95
        },
        {
            id: 11,
            name: '8 Wontons',
            price: 2.95
        },
        {
            id: 12,
            name: 'Fried Rice',
            price: 1.95
        },
        {
            id: 13,
            name: 'Fried Fish',
            price: 6.95
        },
        {
            id: 14,
            name: '2 Fortune Cookies',
            price: .95
        }
    ]
    return(
        <div className="menu">
            <div className="title"><h1>Menu</h1></div>
            <div>
                {
                    food.map(f => <MenuItem key={f.id} {...f}/>)
                }
            </div>
            <div className="summary">
                <Link className="btn" to="/cart">View Cart</Link>
            </div>
            {
                //image popups when an item is added to cart
                props.status ?
                <div>
                    <img className="notification" onAnimationEnd={() => props.change(false)} src="images/thumb.svg"/>
                </div>
                :
                <div>
                </div>
            }
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
        change: (val) => dispatch(click(val))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)