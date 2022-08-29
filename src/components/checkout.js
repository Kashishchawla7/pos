import { useState } from "react";
import React from "react";
import Form from "react-bootstrap/Form";
import { Container, FormGroup } from "react-bootstrap";
import { TextField, MenuItem } from "@mui/material";
import "./checkout.css";
import { textAlign } from "@mui/system";

const mode = [
  {
    value: "Cash",
    label: "💵",
  },
  {
    value: "Card",
    label: "💳",
  },
  {
    value: "UPI",
    label: "🆙",
  },
];
export default function Checkout(props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [number, setNumber] = useState("");
  const [card, setCard] = useState(false);
  const [cardNumber, setcardNumber] = useState("");
  const [cardName, setcardName] = useState("");
  const [cardCvv, setcardCvv] = useState("");
  const [cardDate, setcardDate] = useState("");
  const [cash, setCash] = useState(true);
  const [cashRec, setCashRec] = useState();
  const [rem, setRem] = useState();

  const [payMode, setPayMode] = useState("Cash");
  const { cart } = props;
  function handleSubmit(event) {
    event.preventDefault();
  }
  // const {data} = location;
  return (
    <Container
      style={{
        display: "flex",
        flex: 1,
        margin: "7%",
        boxShadow: " 0 5px 5px 0",
      }}
    >
      <div
        style={{
          flex: 1,
        }}
      >
        <h1 style={{ position: "sticky" }}>Cart</h1>
        <div
          style={{
            contentOverflow: "scroll",
            overflowX: "hidden",
            maxHeight: "80%",
          }}
        >
          {cart.map((item, index) => (
            <div className="orders" key={item.index}>
              <div style={{ float: "left" }}>{item.name}</div>

              <div>{item.price}</div>
              {/* {total(prod,count) } */}
            </div>
          ))}
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <Form onSubmit={handleSubmit}>
          <h1>Customer Details</h1>
          <Form.Group
            size="lg"
            style={{ width: "15rem", float: "left", margin: "1rem" }}
            controlId="email"
          >
            <TextField
              id="standard-basic md"
              label="E-Mail"
              variant="standard"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></TextField>
          </Form.Group>

          <Form.Group
            size="lg"
            style={{ width: "15rem", float: "left", margin: "1rem" }}
            controlId="name"
          >
            <TextField
              id="standard-basic "
              label="Name"
              variant="standard"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></TextField>
          </Form.Group>

          <FormGroup
            size="lg"
            style={{
              width: "15rem",
              float: "left",
              margin: "1rem",
              marginTop: "0",
            }}
            controlId="phonenumber"
          >
            <TextField
              id="standard-basic "
              label="Phone Number"
              variant="standard"
              type="numbers"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            ></TextField>
          </FormGroup>

          <FormGroup
            size="lg"
            style={{
              width: "15rem",
              float: "left",
              margin: "1rem",
              marginTop: "0",
            }}
            controlId="dob"
          >
            <TextField
              id="standard-basic "
              label="BirthDate"
              variant="standard"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            ></TextField>
          </FormGroup>

          <FormGroup
            size="lg"
            style={{ width: "15rem", margin: "1rem 0 1rem 2rem " }}
            controlId="mode"
          >
            <TextField
              id="standard-basic "
              select
              label="Mode"
              //  variant="standard"
              value={payMode}
              onChange={(e) => {
                if (e.target.value == "Card") {
                  setPayMode(e.target.value);
                  setCard(true);
                  setCash(false);
                } else if (e.target.value == "Cash") {
                  setPayMode(e.target.value);
                  setCard(false);
                  setCash(true);
                }
              }}
              helperText="Please Select your Payment Mode"
            >
              {mode.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value} {option.label}
                </MenuItem>
              ))}
            </TextField>
          </FormGroup>
          {cash ? (
            <div>
              <FormGroup
                size="lg"
                style={{
                  width: "15rem",
                  float: "left",
                  margin: "1rem",
                  marginTop: "0",
                }}
                controlId="Total"
              >
                <TextField
                  id="standard-basic "
                  label="Total"
                  variant="standard"
                  value={"2345"}
                  inputProps={{ readOnly: true }}

                  // onChange={(e) => setDob(e.target.value)}
                ></TextField>
              </FormGroup>
              <FormGroup
                size="lg"
                style={{
                  width: "15rem",
                  float: "left",
                  margin: "1rem",
                  marginTop: "0",
                }}
                controlId="Total"
              >
                <TextField
                  id="standard-basic "
                  label="Cash Recieved"
                  variant="standard"
                  value={cashRec}
                  // inputProps={{ readOnly: true }}
                  onChange={(e) => setCashRec(e.target.value)}
                ></TextField>
              </FormGroup>
              <FormGroup
                size="lg"
                style={{
                  // width: "15rem",
                  float: "left",
                  width: "85%",
                  margin: "0 0 1rem 2rem",
                }}
                controlId="Total"
              >
                <TextField
                  id="standard-basic "
                  label="Left Over"
                  variant="standard"
                  value={rem}
                  inputProps={{ readOnly: true }}
                  style={{
                    width: "97%",
                  }}
                  // onChange={(e) => setDob(e.target.value)}
                ></TextField>
              </FormGroup>
            </div>
          ) : null}

          {card ? (
            <div>
              <FormGroup
                size="lg"
                style={{
                  // marginTop: "0",
                  textAlign: "left",
                  // marginLeft: "2.4rem",
                  margin: "0 0 1rem 2.4rem",
                }}
                controlId="cardNumber"
              >
                <TextField
                  id="standard-basic "
                  label="Card Number"
                  variant="standard"
                  value={""}
                  onChange={(e) => setcardNumber(e.target.value)}
                  style={{
                    width: "29rem",
                  }}
                ></TextField>
              </FormGroup>

              <FormGroup
                size="lg"
                style={{
                  width: "15rem",
                  float: "left",
                  margin: "1rem",
                  marginTop: "0",
                }}
                controlId="cardName"
              >
                <TextField
                  id="standard-basic "
                  label="BirthDate"
                  variant="standard"
                  value={""}
                  onChange={(e) => setcardName(e.target.value)}
                ></TextField>
              </FormGroup>

              <FormGroup
                size="lg"
                style={{
                  width: "15rem",
                  float: "left",
                  margin: "1rem",
                  marginTop: "0",
                }}
                controlId="cardCvv"
              >
                <TextField
                  id="standard-basic "
                  label="BirthDate"
                  variant="standard"
                  value={""}
                  onChange={(e) => setcardCvv(e.target.value)}
                ></TextField>
              </FormGroup>

              <FormGroup
                size="lg"
                style={{
                  width: "15rem",
                  float: "left",
                  margin: "1rem",
                  marginTop: "0",
                }}
                controlId="cardDate"
              >
                <TextField
                  id="standard-basic "
                  label="BirthDate"
                  variant="standard"
                  value={""}
                  onChange={(e) => setcardDate(e.target.value)}
                ></TextField>
              </FormGroup>
            </div>
          ) : null}
        </Form>
      </div>

      {/* <Cart prod={{data}}/> */}
    </Container>
  );
}
