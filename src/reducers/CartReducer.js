import {ADD_TO_CART, AMOUNT_DECREASE, AMOUNT_INCREASE, INIT_CART, REMOVE_ITEM} from "../helper/constant";

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

        case AMOUNT_INCREASE:
            let cartState = [...state.cart]
            for(let value of cartState){
                if(value.id === payload){
                    value.count++
                }
            }
            return {...state, cart: cartState}

        case AMOUNT_DECREASE:
            let cartDecrease = [...state.cart]
            for(let value of cartDecrease){
                if(value.id === payload){
                    value.count--
                }
            }
            return {...state, cart: cartDecrease}

        case REMOVE_ITEM:
            console.log('remove reducer')
            let cartRemove = [...state.cart]
            let cartAfterRemove = cartRemove.filter((value, index, arr) => {
                return value.id !== payload
            })
            console.log('remove reducer',cartAfterRemove)
            return {...state, cart: cartAfterRemove}

        case INIT_CART:
            return {...state, cart: payload}

        default:
            return state
    }
}