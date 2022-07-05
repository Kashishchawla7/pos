import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./categories.css"
import Item from './item';


const data=[
    {
        id:1,
        name:"Food",
        srt:"f",
        products:[
            {"name":"Noodles","price":"40","quantity":"0"},
            {"name":"Spring roll","price":"60","quantity":"0"},
            {"name":"Samosa","price":"10","quantity":"0"},
            {"name":"Burger","price":"25","quantity":"0"},
            {"name":"Pasta","price":"120","quantity":"0"},
            {"name":"Macroni","price":"100","quantity":"0"},
            {"name":"Maggi","price":"30","quantity":"0"}

        ]
    },
    {
        id:2,
        name:"Hardware",
        srt:"h",
        products:[
            // {"name":"Item Name","price":"Price","quantity":"0"},

            {"name":"Hammer",
            "price":"50","quantity":"0"},

            {"name":"Screw driver","price":"40","quantity":"0"},

            {"name":"Bike","price":"5900","quantity":"0"},
            {"name":"Nails","price":"10","quantity":"0"},
            {"name":"Iron Bar","price":"65","quantity":"0"},
            {"name":"Channel","price":"72","quantity":"0"},
            {"name":"TMT Bar","price":"98","quantity":"0"},
            {"name":"Round Bar","price":"76","quantity":"0"},
            {"name":"Bolts","price":"40","quantity":"0"},

        ]
    },
    {
        id:3,
        name:"Soft Drink",
        srt:"sd",
        products:[
            {"name":"Mountain Dew","price":"20","quantity":"0"},
            {"name":"Pepsi","price":"30","quantity":"0"},
            {"name":"Coca-Cola","price":"20","quantity":"0"},
            {"name":"Sting","price":"20","quantity":"0"},
            {"name":"Mirinda","price":"45","quantity":"0"},
            {"name":"Slice","price":"15","quantity":"0"},
            {"name":"Tropicana","price":"40","quantity":"0"},

        ]
    },
    {
        id:4,
        name:"Clothing",
        srt:"cl",
        products:[
            {"name":"Denims","price":"2000","quantity":"0"},
            {"name":"T-Shirts","price":"580","quantity":"0"},
            {"name":"Shirts","price":"1000","quantity":"0"},
            {"name":"Kurtas","price":"2640","quantity":"0"},
            {"name":"JumpSuits","price":"4500","quantity":"0"},
            {"name":"Suits","price":"1500","quantity":"0"},
            {"name":"Gown","price":"4000","quantity":"0"},
            {"name":"Shorts","price":"400","quantity":"0"},
        ]
    },

]


const list = []



export default function Categories({setcat}) {
    // const[cat,setCat]=useState("")

    // const next=(item)=>{
    //     console.log(item)
    //     setCat(item.name)
    // }
   
  return (

        <div className="cards" style={{padding:"0"}}>
            
                
                    {data.map((item)=><div className="catst" key={item.id}  onClick={()=>setcat(item.products) } >{item.name}</div>)}
                
        </div>

    
  )
}

