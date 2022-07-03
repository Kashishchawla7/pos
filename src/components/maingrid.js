import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row , Col, CarouselItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./maingrid.css";
import Categories from './categories';
import Item from './item';
import Cart from './cart';


export default function Maingrid() {
  const [cat,setcat] = useState([])
  const [cart,setcart] = useState([])
//   const next=(item)=>{
//     console.log(item)
//     setCat(item.name)
// }
 const childtoparent=(childdata)=>{
  setcart(childdata);
 }

 const itemtocart=(cartdata)=>{
   setcart(cartdata)
 }

 
  return (
    <div>
    <div className='main'>
     
        <div className="div1">
          <div className='divhead'>
            Categories            
          </div>
          
          <Categories className='divcon' setcat={setcat}/>

        </div>

        <div className="div2">
        <p className='divhead'>
            Items            
          </p>
          
          <div className='divit'>
          <Item prod={cat} setcart={setcart}/>
          </div>
        </div>
  
        <div className="div3">
        <p className='divhead'>
            Cart            
          </p>
          <Cart prod={cart}/>
        </div>
        </div>

        <div>
        <Link to="/checkout"
        state={cart}>
             <button>Checkouts</button>
          </Link>
          
          </div>
    </div>
    
  )
}



