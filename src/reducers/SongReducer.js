import {FETCH_DATA, SORT_DATA} from "../helper/constant";

const initState = {
    allSongs: [],
    sortSongs: [],
}

export const SongReducer = (state = initState, action) => {
    const {type, payload} = action
    switch (type){
        case FETCH_DATA:
            console.log('FETCH_DATA')
            return {...state, allSongs: payload, sortSongs: payload}

        case SORT_DATA:
            console.log('SORT_DATA')
            let temp = [...state.allSongs]
            let compare = function (prop) {
                return function (obj1, obj2) {
                    let val1 = obj1[prop];
                    let val2 = obj2[prop];
                    if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
                        val1 = Number(val1);
                        val2 = Number(val2);
                    }
                    if (val1 < val2) {
                        return -1;
                    } else if (val1 > val2) {
                        return 1;
                    } else {
                        return 0;
                    }
                }
            }
            if(payload === '0'){
                    return {...state, sortSongs: state.allSongs}
            }else if(payload === '1'){
                    temp = temp.sort(compare("price")).reverse()
                    }else if(payload === '2'){
                    temp = temp.sort(compare("price"))
                    }
                return {...state, sortSongs: temp}

        default:
            return state
    }
}