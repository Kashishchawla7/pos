import React ,{useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import './login.css'
import { Container, Row , Col} from 'react-bootstrap';
import img1 from'../images/img1.gif';
import avtar from '../images/avtar1.png';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");

 function handleSubmit(event){
   event.preventDefault();
   }

  return (
    <>
    <Container fluid>
      <Row  className="mt-5 p-5 ">
        <Col className="mt-5 p-5 "  lg={6} md={4} sm={10}>
        <Image className="avtar" src={avtar}/>

        <Form onSubmit = {handleSubmit}>
        <h1>LOG IN</h1>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email:</Form.Label>
            <Form.Control autoFocus type ="email" value={email} onChange={(e)=>setEmail(e.target.value)}></Form.Control>

          </Form.Group>
          

          <Form.Group size="lg" controlId="password">
            <Form.Label>Password:</Form.Label>
            <Form.Control type ="password" value={password} onChange={(e)=>setPassword(e.target.value)}></Form.Control>
            
           
            
          </Form.Group><br></br>

          <Form.Check 
            type="switch"
            id="custom-switch"
            label="ADMIN"

            />
          <Button   variant="primary btn-block" size="lg"  type="submit">
            Submit
            </Button>
        </Form>
        </Col>

        <Col lg={6} md={4} sm={10}>
        <Image fluid className='mt-5 p-5'  src={img1} alt=""></Image>

        </Col>
      </Row>
    </Container>
    </>

    

    
    
  );
}

