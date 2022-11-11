import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./cart.css";

export default function Cart(props) {
  const [prices, setPrices] = useState();
  // const [count, setCount] = useState(1);
  let { cart } = props;
  console.log(cart);
  // const senddata=()=>{

  // }
  // const sum1= 0;
  // const total=(prod,count)=>{

  //   let total = 0;
  //   for (let index = 0; index < prod.length; index++) {
  //     const element = prod[index].price;
  //     console.log(element,typeof(element));
  //     total= total + (parseInt(element)*count);
  //     // sum1= total;
  //     console.log(total);
  //   }
  //   localStorage.setItem('Total', total);
  //   // setPrices(total)
  //   return total
  // }
  // useEffect(() => {
  //   total(prod,count);
  //   // Update the document title using the browser API
  //   // document.title = `You clicked ${count} times`;
  // });
  return (
    <div className="mains">
      {cart.map((item, index) => (
        <div className="display" key={item.ITEM_ID}>
          <div className="name">{item.ITEM}</div>

          <div className="price">{item.price}</div>
          {/* {total(prod,count) } */}
        </div>
      ))}
      {/* <h1>total</h1>
        <bold>{total(prod,count)}</bold> */}
    </div>
  );
}
