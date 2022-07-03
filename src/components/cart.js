import React from 'react';
import { Link } from 'react-router-dom';

export default function Cart({prod}) {
    console.log(prod);
  const senddata=()=>{

  }
  return (
    <div>
    
        
        <div >
          {prod.map((item)=>
        
        <div key={item.index}>
          {item.name}
          {item.price}
          
           
        </div>
      
      )}
           
        </div>
      <div>
     
      </div>
      
  
    </div>
  )
}
