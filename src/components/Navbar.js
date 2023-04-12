import React, { useState } from "react";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DehazeIcon from "@mui/icons-material/Dehaze";
import InputBase from "@mui/material/InputBase";
import Drawers from "./drawer";
// import { useLocation } from "react-router";

export default function Navbar(props) {
  const [logoName, setLogoName] = useState("sFAVD");
  // const [open, setOpen] = React.useState(false);
  let {
    isOpen,
    setOpen,
    isOpens,
    setOpens,
    isOpenA,
    setOpenA,
    userName,
  } = props;
  // const handleOpen = () => {
  //   console.log(isOpen);
  //   setIsOpen(!isOpen);
  //   console.log(isOpen);
  // };

  return (
    <div
      style={{
        height: "10vh",
        width: "100%",
        boxShadow: " 0 1px 15px rgb(0 0 0 / 4%), 0 1px 6px rgb(0 0 0 / 4%)",
        // backgroundColor: "black",
        display: "flex",
        position: "fixed",
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "space-between",
        background: "#fff",
        zIndex: 100,
      }}
    >
      <div className="initials" style={{ flex: 1 }}>
        {userName}
      </div>
      <div className="drawer" style={{ flex: 1 }}>
        <DehazeIcon style={{ fontSize: "bolder" }} onClick={() => setOpen()} />
      </div>
      <div
        className="Search"
        style={{
          flex: 2,
          display: "flex",
          background: "#f9f7f7",
          // border: "1px solid #eee",
          borderRadius: "20px",
          position: "relative",
          height: "40px",
          fontSize: ".8rem",
          alignContent: "center",
          textAlign: "center",

          justifyContent: "space-around",
        }}
      >
        <InputBase
          sx={{ ml: 1 }}
          placeholder="Search "
          inputProps={{ "aria-label": "search" }}
        />

        <SearchIcon
          style={{ marginTop: "5px" }}
          // sx={{ p: 2 }}
          aria-label="search"
        />
      </div>
      <div style={{ flex: 3 }}></div>
      <div style={{ flex: 0.5 }}>
        <NotificationsIcon style={{ fontSize: "bolder" }} onClick={setOpens} />
      </div>
      <div style={{ flex: 0.5 }}>
        <AccountCircleIcon style={{ fontSize: "bolder" }} onClick={setOpenA} />
      </div>
    </div>
  );
}
