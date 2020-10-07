import {ADD_TO_CART, CLICK, DEC_TOTAL, INC_TOTAL, REMOVE_FROM_CART} from '../action/actionTypes'

export const cartReducer = (state = [], action) => {
    switch(action.type){
        case ADD_TO_CART:
            let add_index = -1;
            add_index = state.findIndex(obj => obj.id === action.id)
            if(add_index === -1){
                let addObj = {
                    id: action.id,
                    name: action.name,
                    price: action.price,
                    quantity: 1
                }
                return[
                    ...state,
                    addObj
                ]
            }
            else{
                let object = state[add_index]
                object.quantity++
                return[
                    ...state.slice(0, add_index),
                    object,
                    ...state.slice(add_index + 1)
                ]
            }
        case REMOVE_FROM_CART:
            let del_index = state.findIndex(obj => obj.id === action.id)
            if(state[del_index].quantity === 1){
                return[
                    ...state.slice(0, del_index),
                    ...state.slice(del_index + 1)
                ]
            }else{
                let newObj = state[del_index]
                newObj.quantity--
                return[
                    ...state.slice(0, del_index),
                    newObj,
                    ...state.slice(del_index + 1)
                ]
            }
        default:
            return state;
    }
}

export const costReducer = (state = 0, action) => {
    switch(action.type){
        case INC_TOTAL:
            return state + action.price;
        case DEC_TOTAL:
            return state - action.price;
        default:
            return state;
    }
}

export const clickReducer = (state = false, action) => {
    switch(action.type){
        case CLICK:
            return state = action.value
        default:
            return state
    }
}

export const countReducer = (state = 0, action) => {
    switch(action.type){
        case INC_TOTAL:
            return state + 1
        case DEC_TOTAL:
            return state - 1
        default:
            return state
    }
}
