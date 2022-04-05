import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./components/mainPage/Main";
import MainPageView from "./view/MainPageView";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPageView/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
