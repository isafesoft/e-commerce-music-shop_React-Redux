import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./components/mainPage/Main";
import MainPageView from "./view/MainPageView";
import CartView from "./view/CartView";
import './App.css'
import WelcomeView from "./view/WelcomeView";
import Player from "./components/playerPage/Player";
import SongPlayerView from "./view/SongPlayerView";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchData, initCart} from "./action/songAction";


function App() {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.CartReducer.cart)
    const cartLocalStorage = JSON.parse(localStorage.getItem('cart'))
    useEffect(() => {
        fetchData()(dispatch)
        if(cartLocalStorage.length !== 0){
            initCart(cartLocalStorage)(dispatch)
        }
    }, [])

    useEffect(() => {
        if(cart.length !== 0) {
            localStorage.setItem('cart', JSON.stringify(cart))
        }
    },[cart])



    return (
        <div className='app'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<WelcomeView/>}/>
                    <Route path='/shop' element={<MainPageView/>}/>
                    <Route path='/cart' element={<CartView/>}/>
                    <Route path='/song/:id' element={<SongPlayerView/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
