import {api} from "../helper/api";
import {FETCH_DATA} from "../helper/constant";

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