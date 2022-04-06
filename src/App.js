import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./components/mainPage/Main";
import MainPageView from "./view/MainPageView";
import CartView from "./view/CartView";
import './App.css'
import WelcomeView from "./view/WelcomeView";
import Player from "./components/playerPage/Player";
import SongPlayerView from "./view/SongPlayerView";


function App() {
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
