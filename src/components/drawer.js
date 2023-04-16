import React, { useState } from "react";
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

const styles = {
  radioGroupLabel: {
    padding: "8px 12px",
    display: "inline-block",
    verticalAlign: "middle",
  },
};

const list = [
  {
    name: "Dashboard",
    icon: BarChartIcon,
    url: "/admin/dashboard",
  },
  // {
  //   name: "Place Order",
  //   icon: ContentPasteSearchIcon,
  //   url: "/admin/order",
  // },
  {
    name: "Add Item",
    icon: AddIcon,
    url: "/admin/addItem",
  },
  {
    name: "Add User",
    icon: GroupAddIcon,
    url: "/admin/addUser",
  },
];

export default function Drawers(props) {
  let navigate = useNavigate();
  const [size, setSize] = React.useState("");
  const { opens } = props;
  const [open, setOpen] = React.useState(true);
  const [placement, setPlacement] = useState("left");

  const handleOpen = (key) => {
    setOpen(true);
    setPlacement(key);
  };
  const close = () => {
    setOpen(false);
  };
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
              width: 240,
              zIndex: 90,
              marginTop: "11vh",
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
            {list.map((item) => (
              <div
                className="list"
                onClick={() => {
                  navigate(item.url);
                }}
              >
                <div className="listLogo">
                  <item.icon />
                </div>
                <div className="itemName">{item.name}</div>
              </div>
            ))}
          </div>
        </SwipeableDrawer>
      </>
    </div>
  );
}
