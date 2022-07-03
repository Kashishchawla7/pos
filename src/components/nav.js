import React , {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Image , Form , Button , FormControl } from 'react-bootstrap';
import avtar from '../images/avtar1.png';
import './nav.css';



export default function Navs() {
  return (
    <div >
      <Navbar className='navbar navbar-expand-lg' bg="mycolor" >
          <Navbar.Brand >KGD</Navbar.Brand>
          <Navbar.Text className='text'>Happy Shopping</Navbar.Text>
          <Navbar.Collapse className="justify-content-end">
          <Form className="d-flex `">
             <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
        <Button variant="outline-success me-3">Search</Button>
      </Form>
      

        <Image className="avtar" src={avtar}/>
      </Navbar.Collapse>    

      </Navbar>
    </div>
  );
}


