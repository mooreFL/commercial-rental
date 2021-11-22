// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from "react";
import "../styles/Contact.css";
import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("xjvjqbvw");
  // if (state.succeeded) {
  //     return <button>Send Another Message</button>;
  // }
  return (
    <section id="contact">
      <div className="form-container">
        <div className="contact-title-container">
          <h1 className="contact-title">Get Started <span className="title-splash">Today!</span></h1>
        </div>
        <form className="formspree-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Request Quote</label>
          <br />
          <input id="name" type="name" name="name" placeholder="Full Name" />
          <br />
          <input id="email" type="email" name="email" placeholder="Email" />
          <br />
          <label> Pick Up:</label>
          <input placeholder="Pick Up Date" id="pickupdate" type="date" name="pickup" />
          <br />
          <label> Return:</label>
          <input placeholder="Return Date" id="dropdate" type="date" name="dropdate" />
          <br />
          <label htmlFor="shasta">'21 Shasta 310k</label>
          <input id="trailercheckbox1" type="checkbox" name="21Shasta310k" />
          <label htmlFor="Jayco26BH">'16 Jayflight 26BH</label>
          <input id="trailercheckbox1" type="checkbox" name="16Jayflight26BH" />
          <br />
          <label htmlFor="Jayco174BH">'21 Jayflight 174BH</label>
          <input id="trailercheckbox1" type="checkbox" name="21Jayflight174BH" />
          <label htmlFor="ForestRiver207BH">'21 Forest River 207BH</label>
          <input id="trailercheckbox1" type="checkbox" name="21ForestRiver" />
          <br />
          <label htmlFor="Coachmen33BH">'16 Coachmen 33BH</label>
          <input id="trailercheckbox1" type="checkbox" name="16Pursuit33BH" />
          <br />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <br />
          <label> Send Message </label>
          <br />
          <textarea id="message" name="message" />
          {state.succeeded ? (
            <button className="formButton" type="submit">
              {" "}
              Sent !
            </button>
          ) : (
            <button
              className="formButton"
              type="submit"
              disabled={state.submitting}
            >
              Submit
            </button>
          )}
        </form>
        </div>
        <div className="deposit-container">
          <div className="deposit-text">
            <h1>Ready to pay your deposit? Click the button below.</h1>
            <a href="/checkout">
              <li className="nav-links deposit-button">Pay Deposit</li>
            </a>
          </div>
        </div>
    </section>
  );
}
function App() {
  return <ContactForm />;
}
export default App;
