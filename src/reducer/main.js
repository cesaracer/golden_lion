import { combineReducers } from 'redux'
import {cartReducer, clickReducer, costReducer, countReducer} from './reducer'

const rootReducer = combineReducers({
    cart: cartReducer,
    cost: costReducer,
    status: clickReducer,
    count: countReducer
})

export default rootReducer