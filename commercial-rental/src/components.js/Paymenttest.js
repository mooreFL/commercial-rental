
import React, { useState, useEffect } from "react";
import traveltrailericon from "../images/icons8-trailer-48.png";
import campericon from "../images/icons8-camper-50.png";

const ProductDisplay = () => (
  <section>
    <div className="product">
    <img 
    src={traveltrailericon}
    alt="travel trailer icon"
    />
      <div className="description">
      <h3>Trailer Rental Deposit</h3>
      <h5>$500.00</h5>
      </div>
    </div>
    <div className="product">
    <img 
    src={campericon}
    alt="motorhome icon"
    />
      <div className="description">
      <h3>RV Rental Deposit</h3>
      <h5>$1500.00</h5>
      </div>
    </div>
    <form action="/create-checkout-session" method="POST">
      <button type="submit">
        Pay Deposit
      </button>
    </form>
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay />
  );
}