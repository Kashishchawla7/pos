import React, { useEffect, useState } from "react";
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
import "./notidrawer.css";

import axios from "axios";
const styles = {
  radioGroupLabel: {
    padding: "8px 12px",
    display: "inline-block",
    verticalAlign: "middle",
  },
};


export default function NotiDrawer(props) {
  let navigate = useNavigate();
  const [size, setSize] = React.useState("");
  const [datas, setDatas] = React.useState([]);
  const { opens } = props;
  const [open, setOpen] = React.useState(true);
  const [placement, setPlacement] = useState("right");
  const name = localStorage.getItem("name");

  const handleOpen = (key) => {
    setOpen(true);
    setPlacement(key);
  };
  const close = () => {
    setOpen(false);
  };
  
    // const push = (url) => {};
    useEffect(()=>{
    notification()
},[]);
const notification =()=>{let body = JSON.parse(
    JSON.stringify({
        name
    })
    );
    console.log(body)
axios
.post("http://localhost:3001/notification", {
  body: body,
})
.then((response)=>{
    console.log(response);
    console.log(response.data)
    var data= JSON.parse(JSON.stringify(response.data.procResults))
    setDatas(data)
    console.log(data);
})
.catch(function(response) {
  console.log(response);
  navigate("/error");
})}
  return (
    <div>
        <SwipeableDrawer
          anchor={placement}
          open={open}
          variant="persistent"
          PaperProps={{
            sx: {
              width: 340,
              zIndex: 80,
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
          <div>
            {
              datas.map((item,index)=>{
                console.log(item)
                return <div className="list"><h6>{
                  item.MSG}
                  </h6></div>
              })
            }
         
          </div>
        </SwipeableDrawer>
    </div>
  );
}
