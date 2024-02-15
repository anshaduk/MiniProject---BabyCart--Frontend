import React from "react";
import { Link } from "react-router-dom";

const CheckOut = () => {
  return (
    <div>
      <p style={{ textAlign: "center", color: "red" }}>
        Thank you for purchase....
      </p>
      <p style={{ textAlign: "center", color: "red" }}>Vist again......!</p>
      <Link to={"/"}>
        <button style={{ alignItems: "center" }}>Go to home</button>
      </Link>
    </div>
  );
};

export default CheckOut;
