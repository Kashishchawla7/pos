import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./cart.css";
import toast, { Toaster } from "react-hot-toast";

export default function Cart(props) {
  const [prices, setPrices] = useState();

  // const [count, setCount] = useState(1);
  let { cart, total, setTotal } = props;
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
  useEffect(() => {
    var totals = update(cart);
    console.log(totals, "afsg");
    setTotal(totals);
  }, [[], cart]);

  const update = (cart) => {
    console.log(cart);

    // setTotal(0);
    var temp = JSON.parse(JSON.stringify(cart));
    var totals = 0;
    temp.forEach((element, index) => {
      console.log(element);
      totals = totals + parseInt(temp[index].ITEM_PRICE);
    });
    console.log(totals);
    return totals;
  };
  return (
    <div className="mainss">
      {cart.map((item, index) => (
        <div className="displays" key={item.ITEM_ID}>
          <div className="name">{item.ITEM}</div>

          <div className="price">
            <input
              type="number"
              placeholder="Quantity"
              // defaultValue={1}
              value={item.ITEM_QUANTITY}
              maxLength={3}
              style={{
                width: "5rem",
                textAlign: "end",
              }}
            />
          </div>
          <div className="price">{item.ITEM_PRICE}</div>
        </div>
      ))}
      {/* <div className="total"> */}
      {/* <hr></hr> */}
      {/* <div style={{ flex: 1, fontWeight: "bold" }}>TOTAL:</div> */}
      {/* <div style={{ flex: 3, fontWeight: "bolder" }}>{total}</div> */}
      {/* </div> */}
    </div>
  );
}
