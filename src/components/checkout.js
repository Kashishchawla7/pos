import { useEffect, useState } from "react";
import React from "react";
import Form from "react-bootstrap/Form";
import { Container, FormGroup } from "react-bootstrap";
import { TextField, MenuItem } from "@mui/material";
import "./checkout.css";
import { textAlign } from "@mui/system";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router";
import QRCode from "qrcode.react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
const dotenv = require("dotenv");
dotenv.config({
  path: "./config.env",
});

const upis = process.env.UPI;

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
const useStyles = makeStyles((theme) => ({
  submit: {
    // padding: "10px 50px",
    color: "#FFFFFF",
    borderRadius: 5,
    fontSize: "1.7rem",
    transition: "all .2s ease-in-out",
    "&:hover": {
      cursor: "pointer",
      textDecoration: "none",
      transform: "scale(1.03)",
    },
  },
}));

export default function Checkout(props) {
  const [data, setData] = useState([]);
  const [email, setEmail] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [dob, setDob] = useState("");
  const [number, setNumber] = useState("");
  const [card, setCard] = useState(false);
  const [cardNumber, setcardNumber] = useState("");
  const [cardName, setcardName] = useState("");
  const [cardCvv, setcardCvv] = useState("");
  const [cardDate, setcardDate] = useState("");
  const [cash, setCash] = useState(true);
  const [upi, setUPI] = useState(false);
  const [cashRec, setCashRec] = useState(0);
  const [rem, setRem] = useState(0);

  const [payMode, setPayMode] = useState("Cash");
  const { cart, setCart, total } = props;

  useEffect(() => {
    console.log("balance");
    balance();
  });

  const balance = () => {
    var money = 0;
    money = parseInt(cashRec) - total;
    setRem(money);
    return money;
  };
  let navigate = useNavigate();

  const classes = useStyles();
  function handleSubmit(event) {
    event.preventDefault();
    let body = JSON.parse(
      JSON.stringify({
        email,
        fName,
        lName,
        dob,
        number,
        payMode,
        total,
        cart,
      })
    );

    console.log(body);
    axios
      .post("http://localhost:3001/bill", {
        body: body,
      })
      .then((response) => {
        console.log(JSON.parse(JSON.stringify(response)));
        if (response.status == 200) {
          var names = JSON.parse(
            JSON.stringify(response["data"][0]["CUSTOMER_NAME"])
          );
          var credit = JSON.parse(
            JSON.stringify(response["data"][0]["CUSTOMER_CREDIT"])
          );
          var number = JSON.parse(
            JSON.stringify(response["data"][0]["CUSTOMER_NUMBER"])
          );
          var email = JSON.parse(
            JSON.stringify(response["data"][0]["CUSTOMER_EMAIL"])
          );
          console.log(names);
          // var id = names.data.CUSTOMER_id
          // localStorage.setItem("name", names.data.procResults[0].USER_NAME);
          setCart([]);
          navigate("/success", { state: {name:names,credit:credit,number:number,email:email} });
        }
      })
      .catch(function(response) {
        console.log(response);
        navigate("/error");
      });
  }
  // const {data} = location;
  return (
    <Container
      style={{
        display: "flex",
        flex: 1,
        marginTop: "10vh",
        height: "80%",
        boxShadow: " 1px 0 1px 2px  #c8d0e7 inset",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          marginTop: 0,
          justifyContent: "start",
        }}
      >
        <h1 style={{ position: "sticky", flex: 2 }}>Cart</h1>
        <div
          style={{
            contentOverflow: "scroll",
            overflowX: "hidden",
            maxHeight: "80%",
            flex: 8,
          }}
        >
          {cart.map((item, index) => (
            <div
              className="orders"
              style={{
                boxShadow:
                  "0.3rem 0.3rem 0.2rem #c8d0e7 inset , -0.2rem -0.2rem 0.2rem #ffffff inset  ",
                margin: "1rem",
                padding: "0.5rem",
                marginBottom: " 0.5rem",
                display: "flex",
                flexDirection: "row",
              }}
              key={item.index}
            >
              <div style={{ flex: 1, float: "left", height: "2rem" }}>
                {item.ITEM}
              </div>
              <div style={{ flex: 1, float: "left", height: "2rem" }}>
                <input
                  type="number"
                  placeholder="Quantity"
                  value={item.ITEM_QUANTITY}
                  maxLength={3}
                  style={{
                    width: "4rem",
                    flex: 3,
                    textAlign: "end",
                  }}
                />
              </div>

              <div
                style={{
                  flex: 2,
                  float: "left",
                  height: "2rem",
                  justifyContent: "end",
                }}
              >
                {item.ITEM_PRICE}
              </div>

              {/* <div>{item.price}</div> */}
              {/* {total(prod,count) } */}
            </div>
          ))}
        </div>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Form onSubmit={handleSubmit} style={{ height: "100%" }}>
          <h1>Customer Details</h1>
          <Form.Group
            size="lg"
            style={{ width: "15rem", float: "left", flex: 1, margin: "1rem" }}
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
            style={{ width: "15rem", float: "left", flex: 1, margin: "1rem" }}
            controlId="fName"
          >
            <TextField
              id="standard-basic "
              label="First Name"
              variant="standard"
              value={fName}
              onChange={(e) => setFName(e.target.value)}
            ></TextField>
          </Form.Group>

          <Form.Group
            size="lg"
            style={{ width: "15rem", float: "left", flex: 1, margin: "1rem" }}
            controlId="lName"
          >
            <TextField
              id="standard-basic "
              label="Last Name"
              variant="standard"
              value={lName}
              onChange={(e) => setLName(e.target.value)}
            ></TextField>
          </Form.Group>

          <FormGroup
            size="lg"
            style={{
              width: "15rem",
              float: "left",
              margin: "1rem",
              flex: 1,
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
              flex: 1,
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
            style={{
              width: "15rem",
              margin: "1rem 0 1rem 2rem ",
              float: "left",
            }}
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
                  setUPI(false);
                } else if (e.target.value == "UPI") {
                  setPayMode(e.target.value);
                  setUPI(true);
                  setCard(false);
                  setCash(false);
                } else if (e.target.value == "Cash") {
                  setPayMode(e.target.value);
                  setCard(false);
                  setCash(true);
                  setUPI(false);
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
          <div style={{ display: "inline-block", width: "100%" }}>
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
                    label="Cash Recieved"
                    variant="standard"
                    // type="number"
                    defaultValue={0}
                    value={cashRec}
                    // inputProps={{ readOnly: true }}
                    minLength={1}
                    onChange={(e) => {
                      setCashRec(e.target.value);
                      // balance();
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
                  controlId="Total"
                >
                  <TextField
                    id="standard-basic "
                    label="Total"
                    variant="standard"
                    value={total}
                    inputProps={{ readOnly: true }}

                    // onChange={(e) => setDob(e.target.value)}
                  ></TextField>
                </FormGroup>
                <FormGroup
                  size="lg"
                  style={{
                    // width: "15rem",
                    float: "left",
                    width: "30rem",
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
                    label="Card Name"
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
                    label="Card Cvv"
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
                    label="Card Date"
                    variant="standard"
                    value={""}
                    onChange={(e) => setcardDate(e.target.value)}
                  ></TextField>
                </FormGroup>
              </div>
            ) : null}
            {upi ? (
              <div style={{ display: "flex", flexDirection: "row" }}>
                <span
                  style={{
                    display: "flex",
                    flex: 4,
                    alignItems: "center",
                    justifyContent: "end",
                    color: "#F2587F",
                  }}
                >
                  Scan this for payment :-{">"}
                </span>
                <div
                  style={{
                    display: "flex",
                    flex: 4,
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "10px",
                  }}
                >
                  <QRCode
                    value={`upi://pay?pa=chawlakashish99@okhdfcbank&pn=Kashish%20Chawla&tn=undefined&am=${total}`}
                    size={156}
                  />
                </div>
              </div>
            ) : null}
          </div>
          <div style={{ position: "relative", flex: 1 }}>
            <div className={classes.submit}>
              <Button
                style={{
                  backgroundColor: "blue",
                  position: "absolute" /* Set child to absolute positioning */,
                  right: 0,
                }}
                type="submit"
              >
                Submit
              </Button>
            </div>
          </div>
        </Form>
      </div>

      {/* <Cart prod={{data}}/> */}
    </Container>
  );
}
