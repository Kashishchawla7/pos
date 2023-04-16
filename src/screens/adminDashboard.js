import React, { useState } from "react";
import AccountDrawer from "../components/accountDrawer";
// import { Drawer } from "rsuite";
import Drawers from "../components/drawer";
import Navbar from "../components/Navbar";
import NotiDrawer from "../components/notidrawer";
import { useLocation } from "react-router";
import { CSSTransition } from "react-transition-group";

// import "./styles.css";

export default function Admin() {
  // const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpens, setIsOpens] = useState(false);
  const [isOpenA, setIsOpenA] = useState(false);
  const [comp, setComp] = useState("AddItem");
  const setOpen = () => {
    setIsOpen(!isOpen);
  };
  const setOpens = () => {
    setIsOpens(!isOpens);
  };
  const setOpenA = () => {
    setIsOpenA(!isOpenA);
  };
  const name = localStorage.getItem("name");

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Navbar
        open={isOpen}
        setOpen={setOpen}
        opens={isOpens}
        setOpens={setOpens}
        openA={isOpenA}
        setOpenA={setOpenA}
        userName={name}
      />

      {isOpen && (
        <>
          <CSSTransition
            in={isOpen}
            timeout={4000}
            classNames="list-transition"
            unmountOnExit
            appear
            onEntered={setOpen}
            onExit={setOpen}
          >
            <Drawers />
          </CSSTransition>
        </>
      )}
      {isOpens && <NotiDrawer />}
      {isOpenA && <AccountDrawer />}
      {/* <div></div> */}
      {/* {`${comp}/`} */}
    </div>
  );
}
