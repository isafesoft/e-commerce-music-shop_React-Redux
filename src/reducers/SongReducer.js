import {FETCH_DATA} from "../helper/constant";

const initState = {
    allSongs: [],
    sortSongs: [],
}

export const SongReducer = (state = initState, action) => {
    const {type, payload} = action
    switch (type){
        case FETCH_DATA:
            return {...state, allSongs: payload, sortSongs: payload}

        default:
            return state
    }
}