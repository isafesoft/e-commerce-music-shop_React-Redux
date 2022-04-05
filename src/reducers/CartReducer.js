import {ADD_TO_CART} from "../helper/constant";

const cartState = {
    cart:[]
}

export const CartReducer = (state = cartState, action) => {
    const {type,payload} = action

    switch (type){
        case ADD_TO_CART:
            let tempCart = [...state.cart]
            let temp = true
            for (let i = 0; i < tempCart.length; i++) {
                if (tempCart[i].id === payload.id) {
                    tempCart[i].count = parseInt(tempCart[i].count) + 1
                    temp = false
                    break
                }
            }
            if (temp) {
                tempCart.push(payload)
            }
            return {...state, cart: tempCart}

        default:
            return state
    }
}