import React , {useState,useEffect} from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./cart.css";

export default function Cart({prod}) {
  const[prices,setPrices] = useState();
  const [count, setCount] = useState(0);
    console.log(prod);
  const senddata=()=>{

  }
  const sum1= 0;
  const total=(prod)=>{
  
    let total = 0;
    for (let index = 0; index < prod.length; index++) {
      const element = prod[index].price;
      console.log(element,typeof(element));
      total= total + parseInt(element);
      // sum1= total;
      console.log(total);
    }
    // setPrices(total)
    return total
  }
  useEffect(() => {
    // Update the document title using the browser API
    // document.title = `You clicked ${count} times`;
  });
  return (
    <div className="mains">  
              
        {prod.map((item)=> 
              <div className="display" key={item.index}>
                <div className="name">{item.name}</div>
                <Button  variant="primary" onClick={() => setCount(count - 1)}>-</Button>
                <p>{count}</p>
                <Button variant="primary" onClick={() => setCount(count + 1)}>+</Button>

                <div className="price">{item.price*count}</div>
              </div>
        )}
        <h1>total</h1>
        <bold>{total(prod,count)}</bold>
        
            
          </div>   
  
  
  )
}
