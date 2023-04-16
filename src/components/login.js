import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import "./login.css";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "../images/img1.gif";
import avtar from "../images/avtar1.png";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  let navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:3001/login", {
        email: email,
        password: password,
        isAdmin: isAdmin,
      })
      .then(function(response) {
        console.log(JSON.parse(JSON.stringify(response)));
        if (
          response.status == 200 &&
          response.data.user_message == "Successful Admin Login"
        ) {
          var names = JSON.parse(JSON.stringify(response));
          localStorage.setItem("name", names.data.procResults[0].USER_NAME);
          var userName = names.data.procResults[0].USER_NAME;
          console.log(userName);
          navigate("/admin");
        } else if (
          response.status == 200 &&
          response.data.user_message == "Successful Sales Login"
        ) {
          navigate("/home");
        }
      })
      .catch(function(response) {
        console.log(response);
        navigate("/error");
      });

    // logins(email, password);
  }

  // const logins = (email, password) => {
  //   axios.post("/", {});
  // };

  return (
    <>
      <Container fluid>
        <Row className="mt-5 p-5 ">
          <Col className="mt-5 p-5 " lg={6} md={4} sm={10}>
            <Image className="avtar" src={avtar} />

            <Form onSubmit={handleSubmit}>
              <h1>LOG IN</h1>
              <Form.Group size="lg" controlId="email">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  autoFocus
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group size="lg" controlId="password">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <br></br>

              <Form.Check
                type={"checkbox"}
                id="custom-switch"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(!isAdmin)}
                label="ADMIN"
              />
              <Button variant="primary btn-block" size="lg" type="submit">
                Submit
              </Button>
            </Form>
          </Col>

          <Col lg={6} md={4} sm={10}>
            <Image fluid className="mt-5 p-5" src={img1} alt=""></Image>
          </Col>
        </Row>
      </Container>
    </>
  );
}
