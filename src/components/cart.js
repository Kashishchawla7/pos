import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./cart.css";
import toast, { Toaster } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Cart(props) {
  const [prices, setPrices] = useState();

  let { cart, total, setTotal, setCart } = props;

  const deleteItem = (item) => {
    var temp = JSON.parse(JSON.stringify(cart));
    temp.forEach((element, index) => {
      // if (item.ITEM_QUANTITY !== 0) {
      console.log(element);
      if (element.ITEM == item.ITEM) {
        temp[index].ITEM_PRICE =
          parseInt(element.ITEM_PRICE) -
          parseInt(item.ITEM_PRICE) / parseInt(item.ITEM_QUANTITY);
        temp[index].ITEM_QUANTITY = parseInt(element.ITEM_QUANTITY) - 1;
        console.log("====================================");
        console.log(index);
        console.log("====================================");
        // if (temp[index].ITEM_QUANTITY == 0) {
        //   // console.log("====================================");
        //   // console.log("why");
        //   // console.log("====================================");
        //   temp.pop(item);
        // }
        if (temp[index].ITEM_QUANTITY <= 0) {
          console.log("====================================");
          console.log(index);
          console.log("====================================");
          temp.splice(index, 1);
        }
      }
    });
    // }
    setCart(temp);
  };

  useEffect(() => {
    var totals = update(cart);
    console.log(totals, "afsg");
    setTotal(totals);
  }, [[], cart]);

  const update = (cart) => {
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
        <div className="displayss" key={item.ITEM_ID}>
          <div className="name">{item.ITEM}</div>
          <div className="price">
            <input
              type="number"
              placeholder="Quantity"
              value={item.ITEM_QUANTITY}
              maxLength={3}
              style={{
                width: "5rem",
                textAlign: "end",
              }}
            />
          </div>
          <div className="price">{item.ITEM_PRICE}</div>
          <FontAwesomeIcon icon={faTrash} onClick={() => deleteItem(item)} />
        </div>
      ))}
    </div>
  );
}
