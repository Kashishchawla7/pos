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
import Error from "./components/error.js";
import AddItem from "./components/addItem";
import AddUser from "./components/addUser";
import Success from "./components/success";
import UpdateUser from "./components/updateUser";
import DeleteUser from "./components/deleteUser";
import DeleteItem from "./components/deleteItem";
import UpdateItem from "./components/updateItem";
import Dashboard from "./components/dashboard";
import Admindash from "./components/admindash";

function App() {
  const [cat, setcat] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

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
                  total={total}
                  setTotal={setTotal}
                />
              </>
            }
          />
          {console.log(cart)}
          {console.log(total)}
          <Route
            path="/checkout"
            exact
            element={<Checkout cart={cart} setCart={setCart} total={total} />}
          />
          {/* <Route path="/admin" exact element={<Navbar cart={cart} />} /> */}
          <Route
            path="/admin"
            exact
            element={
              <>
                <Admin />
                <Admindash />
              </>
            }
          />
          <Route
            path="/admin/addItem"
            exact
            element={
              <>
                <Admin />
                <AddItem />
              </>
            }
          />
          <Route
            path="/admin/updateItem"
            exact
            element={
              <>
                <Admin />
                <UpdateItem />
              </>
            }
          />
          <Route
            path="/admin/deleteItem"
            exact
            element={
              <>
                <Admin />
                <DeleteItem />
              </>
            }
          />
          <Route
            path="/admin/dashboard"
            exact
            element={
              <>
                <Admin />
                <Dashboard />
              </>
            }
          />
          <Route
            path="/admin/addUser"
            exact
            element={
              <>
                <Admin />
                <AddUser />
              </>
            }
          />
          <Route
            path="/admin/UpdateUser"
            exact
            element={
              <>
                <Admin />
                <UpdateUser />
              </>
            }
          />
          <Route
            path="/admin/deleteUser"
            exact
            element={
              <>
                <Admin />
                <DeleteUser />
              </>
            }
          />
          <Route path="/error" exact element={<Error />} />
          <Route path="/success" exact element={<Success />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
