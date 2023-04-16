import React, { useState,useEffect } from "react";
import ReactDOM from "react-dom";
import "./drawer.css";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Typography from "@mui/material/Typography";
import BarChartIcon from "@mui/icons-material/BarChart";
import { Dashboard } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import AddIcon from "@mui/icons-material/Add";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button } from "@mui/material";
import axios from "axios";

const styles = {
  radioGroupLabel: {
    padding: "8px 12px",
    display: "inline-block",
    verticalAlign: "middle",
  },
};

export default function AccountDrawer(props) {
  let navigate = useNavigate();
  const [size, setSize] = React.useState("");
  const { opens } = props;
  const [open, setOpen] = React.useState(true);
  const [clicked, setClicked] = React.useState(false);
  const [placement, setPlacement] = useState("right");
  const name = localStorage.getItem("name");

  const handleOpen = (key) => {
    setOpen(true);
    setPlacement(key);
  };
  const close = () => {
    setOpen(false);
  };
  const markIn=() => {
    let body = JSON.parse(
      JSON.stringify({
        name
      })
    );
      axios
      .post("http://localhost:3001/markIn", {
        body: body,
      })
      .catch(function(response) {
        console.log(response);
        // navigate("/error");
      });
  }
  
 
  const logOut = async () =>{
    await markIn();
    localStorage.removeItem("name");
    navigate("/");
  }
  // const push = (url) => {};

  return (
    <div>
      <>
        <SwipeableDrawer
          anchor={placement}
          open={open}
          variant="persistent"
          PaperProps={{
            sx: {
              width: 340,
              zIndex: 90,
              marginTop: "12vh",
            },
          }}
          // containerClassName={open ? "hide-drawer" : "show-drawer"}
          // {sate ? <div></div>: null}
          onClose={close}
          // sx={{ ...(open && { display: "none" }) }}

          // onOpen={toggleDrawer(anchor, true)}
        >
          {/* <Typography>Clipped drawer</Typography> */}
          {/* {list(anchor)} */}
          <div >
          
        <AccountCircleIcon style={{  fontSize:"x-large",fontWeight:"bolder"}}/>

          </div>
          <div style={{display:"flex",justifyContent:"space-evenly"}}>
            
          <Button variant="contained" color="primary" onClick={markIn}>Mark In</Button>
              <Button variant="contained" onClick={logOut}>Log Out</Button>
          </div>
        </SwipeableDrawer>
      </>
    </div>
  );
}
