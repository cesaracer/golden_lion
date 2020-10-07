import {ADD_TO_CART, REMOVE_FROM_CART, INC_TOTAL, DEC_TOTAL, CLICK} from './actionTypes'

export const addToCart = (id, name, price) => {
    return{
        type: ADD_TO_CART,
        id,
        name,
        price
    }
}

export const removeFromCart = (id) => {
    return{
        type: REMOVE_FROM_CART,
        id
    }
}

export const incTotal = (price) => {
    return{
        type: INC_TOTAL,
        price
    }
}

export const decTotal = (price) => {
    return{
        type: DEC_TOTAL,
        price
    }
}

export const click = (value) => {
    return{
        type: CLICK,
        value
    }
}