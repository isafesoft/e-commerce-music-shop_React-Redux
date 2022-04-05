import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./components/mainPage/Main";
import MainPageView from "./view/MainPageView";
import CartView from "./view/CartView";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPageView/>}/>
          <Route path='/cart' element={<CartView/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
