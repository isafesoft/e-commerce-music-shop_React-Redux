import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./components/mainPage/Main";
import MainPageView from "./view/MainPageView";
import CartView from "./view/CartView";
import './App.css'


function App() {
    return (
        <div className='app'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainPageView/>}/>
                    <Route path='/cart' element={<CartView/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
