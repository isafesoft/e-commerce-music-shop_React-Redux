import {api} from "../helper/api";
import {
    ADD_TO_CART,
    AMOUNT_DECREASE,
    AMOUNT_INCREASE,
    FETCH_DATA,
    INIT_CART,
    REMOVE_ITEM,
    SORT_DATA
} from "../helper/constant";

export const fetchData = () => async dispatch => {
    try{
        let result = await api.get('solo')
        if(!!result.data){
            dispatch({type:FETCH_DATA, payload: result.data.data})
        }
    }catch (e) {
        console.log('cant get any data',e)
    }
}

export const sortSongs = (value) => dispatch => {
    dispatch({type: SORT_DATA, payload: value})
}

export const initCart = (storage) => dispatch => {
    dispatch({type: INIT_CART, payload: storage})
}

export const addToCart = (song) => dispatch => {

    let temp = {...song, count: 1}
    console.log('addtocart action temp',temp)
    dispatch({type: ADD_TO_CART, payload: temp})
}

export const amountIncrease = (id) => dispatch => {
    dispatch({type: AMOUNT_INCREASE, payload: id})
}

export const amountDecrease = (id) => dispatch => {
    dispatch({type: AMOUNT_DECREASE, payload: id})
}

export const removeItem = (id) => dispatch => {
    console.log('remove action',id)
    dispatch({type: REMOVE_ITEM, payload: id})
}