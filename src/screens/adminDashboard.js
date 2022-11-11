import React, { useState } from "react";
// import { Drawer } from "rsuite";
import Drawers from "../components/drawer";
import Navbar from "../components/Navbar";

export default function Admin() {
  const [isOpen, setIsOpen] = useState(false);
  const setOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div>
        <Navbar open={isOpen} setOpen={setOpen} />
      </div>
      <div>{isOpen && <Drawers />}</div>
    </div>
  );
}
