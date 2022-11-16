import Accomodation from "./components/Accomodation";
import Home from "./components/home"
import {Routes,Route, BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes> 
         <Route path="/" exact element={ <Home/>}></Route> 
        <Route path="/place" exact element={<Accomodation/>}></Route>

      </Routes>

      </BrowserRouter>
   
  
    </div>
  );
}

export default App;
