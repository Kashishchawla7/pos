// import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import "./item.css";
import { Button, Card, Modal, Box, Typography, Grid } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import toast, { Toaster } from "react-hot-toast";
import f1 from "../images/avtar1.png";
import { Url } from "url";
// import "react-toastify/dist/ReactToastify.css";

export default function Item(props) {
  const [index, setIndex] = useState(0);
  // console.log(prod);
  const [quantity, setQuantity] = useState();
  const [count, setCount] = useState(1);
  let { cat, setCart, cart } = props;
  const carts = [];
  const update = (item) => {
    // setCart(cart.concat(item));
    console.log("clicked");
    toast.success("Item Added", {
      duration: 1000,
      position: "bottom-right",

      // Custom Icon
      icon: "✅",
      // Change colors of success/error/loading icon
      iconTheme: {
        primary: "#0a0",
        secondary: "#fff",
      },
      // Aria
      ariaProps: {
        role: "status",
        "aria-live": "polite",
      },
    });

    console.log(item, cart);
    var temp = JSON.parse(JSON.stringify(cart));
    if (cart.length == 0) {
      temp.push(item);
    } else {
      var flag = 0;
      temp.forEach((element, index) => {
        console.log(element);
        if (element.ITEM == item.ITEM) {
          flag = 1;
          temp[index].ITEM_PRICE =
            parseInt(element.ITEM_PRICE) + parseInt(item.ITEM_PRICE);
          temp[index].ITEM_QUANTITY =
            parseInt(element.ITEM_QUANTITY) + parseInt(item.ITEM_QUANTITY);
        }
      });
      if (flag == 0) {
        temp.push(item);
      }
    }
    setCart(JSON.parse(JSON.stringify(temp)));
  };
  return (
    <div className="mainItem">
      {/* <Row style={{paddingLeft:0, paddingRight:0}}> */}
      <Grid container rowGap={1} columnGap={0.2}>
        {cat.map((item) => (
          // <Col lg="4">
          <Grid key={item.ITEM_ID} item lg={2.8} style={{ padding: 5 }}>
            <Card>
              <Box
                sx={{
                  height: "100%",
                  width: "100%",
                  // backgroundImage: { f1 },
                  backgroundPosition: "center",
                }}
              >
                <div
                  className="displays"
                  key={item.ITEM_ID}
                  onChange={(e, value) => setIndex(value)}
                >
                  <CardMedia
                    component="img"
                    height="100%"
                    src={item.ITEM_PATH}
                    alt="Image"
                    title="Background Image"

                    // component="img"
                    // height="100%"
                    // image={`url(./images/${item.ITEM_PATH})`}
                    // alt="Image"
                    // title="Background Image"
                  />
                  <CardContent style={{ width: "100%" }}>
                    <Typography gutterBottom variant="h6" component="div">
                      {item.ITEM}
                    </Typography>
                    <Typography
                      variant="body2"
                      component="div"
                      color="text.secondary"
                    >
                      {item.ITEM_PRICE}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      className="addButton"
                      fullWidth
                      // style={{ minWidth: "100%", width: "100%" }}
                      variant="contained"
                      color="primary"
                      // size="lg"
                      aria-label="add to shopping cart"
                      onClick={() => update(item)}
                    >
                      ADD <AddShoppingCartIcon />
                    </Button>
                  </CardActions>
                </div>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Toaster />
    </div>
  );
}
