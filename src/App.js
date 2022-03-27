import './App.css';
import Store from "./Pages/Store"
import Cart from "./Pages/Cart"
import Header from './Components/Header';
import {Routes,Route} from "react-router-dom"
function App() {
  
  return (
    <div className="App">
      <Header/>
      
      <Routes>
        <Route path ="/" element={<Store/>}/>
        <Route path ="/cart" element={<Cart/>}/>

      </Routes>
     
    </div>
  );
}

export default App;
