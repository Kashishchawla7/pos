import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./categories.css"
import Item from './item';


const data=[
    {
        id:1,
        name:"food",
        srt:"f",
        products:[
            {"name":"Noodles","price":"20","quantity":"0"},
            {"name":"Spring roll","price":"30","quantity":"0"}
        ]
    },
    {
        id:2,
        name:"hardware",
        srt:"h",
        products:[
            {"name":"Hammer",
            "price":"50","quantity":"0"},

            {"name":"Screw driver","price":"40","quantity":"0"},

            {"name":"Bike","price":"590","quantity":"0"},
        ]
    },
    {
        id:3,
        name:"Soft Drink",
        srt:"sd",
        products:[
            {"name":"Mountain Dew","price":"5","quantity":"0"},
            {"name":"Pepsi","price":"7","quantity":"0"},
            {"name":"Coca-Cola","price":"9","quantity":"0"},
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

