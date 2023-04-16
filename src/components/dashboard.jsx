import React from 'react'
import f1 from "../images/salesdash.png";


export default function Dashboard() {
  return (
    <div
        style={{
          height: "50%",
          width: "50vh",
          display: "flex",
          // position: "relative",
          // alignItems: "center",
          // justifyContent: "center",
          padding: "12vh",
          zIndex: "100",
        }}
      >
        <img src={f1} />
      </div>
  )
}
