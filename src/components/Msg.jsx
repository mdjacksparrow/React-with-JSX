import React from "react";

// Reusable component
function Msg(props) {
  return (
    <div className="container">
      <h1 style={{ color: `${props.color}` }}> Good {props.msg} </h1>
    </div>
  );
}

export default Msg;
