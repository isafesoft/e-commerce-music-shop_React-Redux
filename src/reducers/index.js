import {combineReducers} from "redux";
import {SongReducer} from "./SongReducer";
import {CartReducer} from "./CartReducer";

export default combineReducers({
    SongReducer,CartReducer
})