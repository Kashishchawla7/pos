import {useState} from 'react'
import React from 'react'
import  Form  from 'react-bootstrap/Form'
import { Container, FormGroup } from 'react-bootstrap';
import Cart from './cart';

export default function Checkout() {
    const [email , setEmail] = useState("");
  const [name , setName] = useState("");
    function handleSubmit(event){
        event.preventDefault();
        }
        // const {data} = location;
  return (
    <div>
      <Container >
      <Form onSubmit = {handleSubmit}>
        <h1>Customer Details</h1>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email:</Form.Label>
            <Form.Control autoFocus type ="email" value={email} onChange={(e)=>setEmail(e.target.value)}></Form.Control>

          </Form.Group>
          

          <Form.Group size="lg" controlId="name">
            <Form.Label>Name:</Form.Label>
            <Form.Control type ="text" value={name} onChange={(e)=>setName(e.target.value)}></Form.Control>
            </Form.Group><br></br>

            <FormGroup size ="lg" controlId="phonenumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type = "numbers" onChange={(e)=>setName(e.target.value)}></Form.Control>
            </FormGroup>
            </Form>
      </Container>

      {/* <Cart prod={{data}}/> */}
    </div>
  )
}
