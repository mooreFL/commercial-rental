import StripeContainer from "./StripeContainer";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Stripepay.css";

function Stripepay() {
  return (
    <React.Fragment>
      <h1>Pay RV Deposit</h1>
      <StripeContainer /> <h3>$1500.00</h3>
      <Link className="payheader" to="/payment">Pay RV Deposit</Link>
      <h1>Pay Trailer Deposit</h1>
      <StripeContainer /> <h3>$500.00</h3>
      <Link className="payheader" to="/payment">Pay Trailer Deposit</Link>
    </React.Fragment>
  );
}

export default Stripepay;
