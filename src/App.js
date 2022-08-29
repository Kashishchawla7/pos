import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router ,Routes,  Route } from"react-router-dom";
import React,{useState} from 'react'
import Login from './components/login';
import Navs from './components/nav';
import Maingrid from './components/maingrid';
import Checkout from './components/checkout';

function App() {
    const [cat,setcat] = useState([])
    const [cart,setCart] =  useState([]);
  return (
    <Router>
      <div className="App">
        {/* <Login/> */}
        <Routes>
          <Route path="/" exact element={<Login/>}/>
          <Route path="/home" exact element={<><Maingrid  cat={cat}  setcat={setcat} cart={cart} setCart = {setCart}/></>}/>
          {console.log(cart)}
          <Route path="/checkout" exact element={<Checkout cart={cart}/>}/>
        
        </Routes>
     
    </div>
    </Router>
  );
}

export default App;
