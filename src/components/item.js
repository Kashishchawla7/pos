import { click } from '@testing-library/user-event/dist/click';
import React, {useState} from 'react'
import "./item.css"
import { Button } from 'bootstrap';
export default function Item({prod , setcart, cart}) {
  // console.log(prod);
  const [quantity,setQuantity]=useState()
  const carts=[]
  const update=(item)=>{
    // carts.concat(item);
    // console.log(carts);
    setcart(cart=>cart.concat(item));
  }
  const add=(item)=>{
    const current= item.quantity+1;
    return current;
  }
  const sub=(item)=>{
    const current= item.quantity-1;
  
    
  }
 
  return (
    
    
    <div >
        {prod.map((item)=>
        
          <div className ="display" key={item.index}
            >
            <div className="name">{item.name}</div>
            {/* <Button >+</Button>  */}
            <div className="functions"><button    onClick={()=>add(item)}>+</button>
            <>{quantity}</>
              {/* <Button variant="outline-info">-</Button> */}
              <button onClick={()=>sub(item)}>-</button>
              </div>
            <div className="price">{item.price}</div>
          <button onClick = {()=>update(item) }>ADD</button>
             
          </div>
          
        
        )}
    
    </div>
  )
}
