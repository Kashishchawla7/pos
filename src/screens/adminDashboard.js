import React, { useState } from "react";
import AccountDrawer from "../components/accountDrawer";
// import { Drawer } from "rsuite";
import Drawers from "../components/drawer";
import Navbar from "../components/Navbar";
import NotiDrawer from "../components/notidrawer";

export default function Admin() {
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
  return (
    <div>
      <Navbar
        open={isOpen}
        setOpen={setOpen}
        opens={isOpens}
        setOpens={setOpens}
        openA={isOpenA}
        setOpenA={setOpenA}
      />
      {isOpen && <Drawers />}
      {isOpens && <NotiDrawer />}
      {isOpenA && <AccountDrawer />}
      {/* <div></div> */}
      {/* {`${comp}/`} */}
    </div>
  );
}
