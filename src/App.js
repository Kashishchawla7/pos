import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router ,Routes,  Route } from"react-router-dom";

import Login from './components/login';
import Navs from './components/nav';
import Maingrid from './components/maingrid';
import Checkout from './components/checkout';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Login/> */}
        <Routes>
          <Route path="login" exact element={<Login/>}/>
          <Route path="/home" exact element={<><Navs/><Maingrid/></>}/>
          <Route path="/checkout" exact element={<Checkout/>}/>
        
        </Routes>
     
    </div>
    </Router>
  );
}

export default App;
