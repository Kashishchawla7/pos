import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, CarouselItem } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Grid2 from "@mui/material/Unstable_Grid2";
import "./maingrid.css";
import Item from "./item";
import Cart from "./cart";
import { Typography } from "@mui/material";
import Navs from "./nav";

export default function Maingrid(props) {
  let { cat, setcat, cart, setCart, total, setTotal } = props;
  //   const next=(item)=>{
  //     console.log(item)
  //     setCat(item.name)
  // }
  //  const childtoparent=(childdata)=>{
  //   setCart(childdata);
  //  }

  //  const itemtocart=(cartdata)=>{
  //    setCart(cartdata)
  //  }
  let navigate = useNavigate();

  return (
    <div className="maingrid">
      <div className="categories">
        <Navs cat={cat} setcat={setcat} />
      </div>
      <Container fluid className="main">
        <div className="div2">
          <Typography variant="h5">Items</Typography>

          <div className="divit">
            <Item cat={cat} setCart={setCart} cart={cart} />
          </div>
        </div>
        {console.log(cart)}
        <div className="div3">
          <Typography variant="h5">Cart</Typography>
          <Cart
            cart={cart}
            total={total}
            setCart={setCart}
            setTotal={setTotal}
          />
        </div>
      </Container>
      <div className="bottom">
        <div className="checkout ">
          <div className="d-grid gap-2">
            <Button
              variant="success"
              size="lg"
              onClick={() => {
                navigate("/checkout");
              }}
            >
              Checkouts
            </Button>
          </div>
        </div>
        {/* <div className="total">
          <h1>TOTAL: {localStorage.getItem("Total")}</h1>
        </div> */}
      </div>
    </div>
  );
}
