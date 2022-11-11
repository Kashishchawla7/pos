import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Login from "./components/login";
import Navs from "./components/nav";
import Maingrid from "./components/maingrid";
import Checkout from "./components/checkout";
import Navbar from "./components/Navbar";
import { Drawer } from "rsuite";
import Admin from "./screens/adminDashboard";

function App() {
  const [cat, setcat] = useState([]);
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <div className="App">
        {/* <Login/> */}
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route
            path="/home"
            exact
            element={
              <>
                {/* <Navbar /> */}
                <Maingrid
                  cat={cat}
                  setcat={setcat}
                  cart={cart}
                  setCart={setCart}
                />
              </>
            }
          />
          {console.log(cart)}
          <Route path="/checkout" exact element={<Checkout cart={cart} />} />
          <Route path="/test" exact element={<Navbar cart={cart} />} />
          <Route path="/test2" exact element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
