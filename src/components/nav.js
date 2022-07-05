import React , {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Image , Form , Button , FormControl } from 'react-bootstrap';
import avtar from '../images/avtar1.png';
import './nav.css';
import Item from './item';



export default function Navs() {
  const [value,setValue]= useState("")
// const pass=()=>{
//   setValue(value);
// }
const handleSubmit=(event)=>{
  
  console.log(value);

  alert('A name was submitted: ' + value);
  event.preventDefault();
}
const handleChange=(event)=>{
  console.log(value);
  console.log(event.target.value);
  setValue(event.target.value);
}
  return (
    <div >
      <Navbar className='navbar navbar-expand-lg' bg="mycolor" >
          <Navbar.Brand >KGD</Navbar.Brand>
          <Navbar.Text className='text'>Happy Shopping</Navbar.Text>
          <Navbar.Collapse className="justify-content-end">
          <form className="d-flex" onSubmit={handleSubmit}>
             <input
                type="text"
                placeholder="Search"
                className="me-2"
                // aria-label="Search"
                value={value}
                onChange={handleChange}
                />
          <input type="submit" value="Submit" />
      </form>
      

        <Image className="avtar" src={avtar}/>
      </Navbar.Collapse>    

      </Navbar>
    </div>
  );
}


