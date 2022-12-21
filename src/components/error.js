import React from "react";
import Image from "react-bootstrap/Image";
import "./error.css";
import img1 from "../images/404.jpg";

export default function Error() {
  return (
    <div className="container">
      <Image src={img1}></Image>
    </div>
  );
}
