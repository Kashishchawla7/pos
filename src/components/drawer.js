import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./drawer.css";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Typography from "@mui/material/Typography";
import BarChartIcon from "@mui/icons-material/BarChart";
import { Dashboard } from "@mui/icons-material";
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
  },
  {
    name: "Place Order",
    icon: ContentPasteSearchIcon,
  },
  {
    name: "Add Item",
    icon: AddIcon,
  },
  {
    name: "Add User",
    icon: GroupAddIcon,
  },
];

export default function Drawers(props) {
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
              <div className="list">
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
