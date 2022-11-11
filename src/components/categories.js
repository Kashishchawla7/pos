import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./categories.css";
import Item from "./item";
import { Card } from "@mui/material";
import axios from "axios";

// const data=[
//     {
//         id:1,
//         name:"Food",
//         srt:"f",
//         products:[
//             {"name":"Noodles","price":"40","quantity":"0"},
//             {"name":"Spring roll","price":"60","quantity":"0"},
//             {"name":"Samosa","price":"10","quantity":"0"},
//             {"name":"Burger","price":"25","quantity":"0"},
//             {"name":"Pasta","price":"120","quantity":"0"},
//             {"name":"Macroni","price":"100","quantity":"0"},
//             {"name":"Maggi","price":"30","quantity":"0"}

//         ]
//     },
//     {
//         id:2,
//         name:"Hardware",
//         srt:"h",
//         products:[
//             // {"name":"Item Name","price":"Price","quantity":"0"},

//             {"name":"Hammer",
//             "price":"50","quantity":"0"},

//             {"name":"Screw driver","price":"40","quantity":"0"},

//             {"name":"Bike","price":"5900","quantity":"0"},
//             {"name":"Nails","price":"10","quantity":"0"},
//             {"name":"Iron Bar","price":"65","quantity":"0"},
//             {"name":"Channel","price":"72","quantity":"0"},
//             {"name":"TMT Bar","price":"98","quantity":"0"},
//             {"name":"Round Bar","price":"76","quantity":"0"},
//             {"name":"Bolts","price":"40","quantity":"0"},

//         ]
//     },
//     {
//         id:3,
//         name:"Soft Drink",
//         srt:"sd",
//         products:[
//             {"name":"Mountain Dew","price":"20","quantity":"0"},
//             {"name":"Pepsi","price":"30","quantity":"0"},
//             {"name":"Coca-Cola","price":"20","quantity":"0"},
//             {"name":"Sting","price":"20","quantity":"0"},
//             {"name":"Mirinda","price":"45","quantity":"0"},
//             {"name":"Slice","price":"15","quantity":"0"},
//             {"name":"Tropicana","price":"40","quantity":"0"},

//         ]
//     },
//     {
//         id:5,
//         name:"Clothing",
//         srt:"cl",
//         products:[
//             {"name":"Denims","price":"2000","quantity":"0"},
//             {"name":"T-Shirts","price":"580","quantity":"0"},
//             {"name":"Shirts","price":"1000","quantity":"0"},
//             {"name":"Kurtas","price":"2640","quantity":"0"},
//             {"name":"JumpSuits","price":"4500","quantity":"0"},
//             {"name":"Suits","price":"1500","quantity":"0"},
//             {"name":"Gown","price":"4000","quantity":"0"},
//             {"name":"Shorts","price":"400","quantity":"0"},
//             {"name":"Pants","price":"400","quantity":"0"},
//         ]
//     },

//     {
//         id:6,
//         name:"Stationary",
//         srt:"st",
//         products:[
//             {"name":"Notebook","price":"150","quantity":"0"},
//             {"name":"Crayons","price":"100","quantity":"0"},
//             {"name":"Sketches","price":"50","quantity":"0"},
//             {"name":"Pensil","price":"10","quantity":"0"},
//             {"name":"Pen","price":"20","quantity":"0"},
//             {"name":"Stickers","price":"100","quantity":"0"},
//             {"name":"Books","price":"300","quantity":"0"},
//             {"name":"Painting Colours","price":"400","quantity":"0"},

//         ]
//     },
//     {
//         id:7,
//         name:"Electronics",
//         srt:"el",
//         products:[
//             {"name":"Camera","price":"10000","quantity":"0"},
//             {"name":"Laptop","price":"50000","quantity":"0"},
//             {"name":"Television","price":"15000","quantity":"0"},
//             {"name":"Monitor","price":"26040","quantity":"0"},
//             {"name":"Smart Automation","price":"45000","quantity":"0"},
//             {"name":"Watches","price":"15000","quantity":"0"},
//             {"name":"Keyboard","price":"4000","quantity":"0"},
//             {"name":"Mouse","price":"1000","quantity":"0"},
//         ]
//     },
//     {
//         id:8,
//         name:"Footwear",
//         srt:"fo",
//         products:[
//             {"name":"Sports shoes","price":"3000","quantity":"0"},
//             {"name":"Sneakers","price":"1000","quantity":"0"},
//             {"name":"Slippers","price":"500","quantity":"0"},
//             {"name":"Flats","price":"440","quantity":"0"},
//             {"name":"Crocs Automation","price":"700","quantity":"0"},
//             {"name":"Sliders","price":"800","quantity":"0"},
//             {"name":"Sandals","price":"1200","quantity":"0"},
//             {"name":"Boots","price":"1000","quantity":"0"},
//         ]
//     },
//     {
//         id:9,
//         name:"Grocery",
//         srt:"gro",
//         products:[
//             {"name":"Sugar","price":"3000","quantity":"0"},
//             {"name":"Salt","price":"1000","quantity":"0"},
//             {"name":"Vegetable","price":"500","quantity":"0"},
//             {"name":"Fruits","price":"440","quantity":"0"},
//             {"name":"Pulses","price":"700","quantity":"0"},
//             {"name":"Tea","price":"800","quantity":"0"},
//             {"name":"Biscuit","price":"1200","quantity":"0"},
//             {"name":"Chips","price":"1000","quantity":"0"},
//             {"name":"Namkeen","price":"1000","quantity":"0"},
//             {"name":"Spices","price":"1000","quantity":"0"},
//         ]
//     },

// ]

const list = [];

export default function Categories({ setcat }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/categories")
      .then((response) => {
        console.log(response.data, "products");
        setData(response.data);
        console.log(typeof data);
      })
      .catch((error) => {
        console.log(error);
        //   this.setState({ error: "Error retreiving Data" });
      });
  }, []);

  // const next=(item)=>{
  //     console.log(item)
  //     setCat(item.name)
  // }

  return (
    <div className="cards" style={{ padding: "0" }}>
      {data.map((item) => (
        <Card
          className="catst"
          key={item.CATEGORY_ID}
          onClick={() => setcat(item.PRODUCTS)}
        >
          {console.log(item)}
          {item.CATEGORY_NAME}
        </Card>
      ))}
    </div>
  );
}
