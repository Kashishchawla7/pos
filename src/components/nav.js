import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Image, Form, Button, FormControl } from "react-bootstrap";
import avtar from "../images/avtar1.png";
import Item from "./item";
import Categories from "./categories";

export default function Navs(props) {
  let { cat, setcat } = props;
  //   const [value,setValue]= useState("")
  // // const pass=()=>{
  // //   setValue(value);
  // // }
  // const handleSubmit=(event)=>{

  //   console.log(value);

  //   alert('A name was submitted: ' + value);
  //   event.preventDefault();
  // }
  // const handleChange=(event)=>{
  //   console.log(value);
  //   console.log(event.target.value);
  //   setValue(event.target.value);
  // }
  //   return (
  //     <div >
  //       <Navbar className='navbar navbar-expand-lg' bg="mycolor" >
  //           <Navbar.Brand >KGD</Navbar.Brand>
  //           <Navbar.Text className='text'>Happy Shopping</Navbar.Text>
  //           <Navbar.Collapse className="justify-content-end">
  //           <form className="d-flex" onSubmit={handleSubmit}>
  //              <input
  //                 type="text"
  //                 placeholder="Search"
  //                 className="me-2"
  //                 // aria-label="Search"
  //                 value={value}
  //                 onChange={handleChange}
  //                 />
  //           <input type="submit" value="Submit" />
  //       </form>

  //         <Image className="avtar" src={avtar}/>
  //       </Navbar.Collapse>

  //       </Navbar>
  //     </div>
  //   );
  return (
    <div className="mainssss" style={{ display: "flex", flex: 1 }}>
      <Categories className="divcon" setcat={setcat} />
    </div>
  );
}
