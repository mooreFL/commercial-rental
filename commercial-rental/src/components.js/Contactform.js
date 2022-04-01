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
          <h1 className="contact-title">
            Get Started <span className="title-splash">Today!</span>
          </h1>
        </div>
        <form className="formspree-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Request Quote</label>
          <br />
          <input id="name" type="name" name="name" placeholder="Full Name" />
          <br />
          <input id="email" type="email" name="email" placeholder="Email" />
          <br />
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
          />
          <br />
          <label>Delivery:</label>
          <input id="deliverycheckbox" type="checkbox" name="delivery" />
          <br />
          <label>Self Tow:</label>
          <input id="selftowcheckbox" type="checkbox" name="delivery" />
          <br />
          <label> Start:</label>
          <input
          placeholder="Pick Up Date"
          id="pickupdate"
          type="date"
          name="pickup"
          />
          <br />
          <label> Return:</label>
          <input
          placeholder="Return Date"
          id="dropdate"
          type="date"
          name="dropdate"
          />
          <br />
          <label>Destination:</label>
          <input id="destcity" type="text" name="city" placeholder="City Name" />
          <br />
          <label htmlFor="shasta">
            '21 Shasta 310k
            <input
              id="21shastaoasischeckbox"
              type="checkbox"
              name="21Shasta310k"
            />
          </label>
          <label htmlFor="Jayco26BH">
            '16 Jayflight 26BH
            <input
              id="16jayflight26bhcheckbox"
              type="checkbox"
              name="16Jayflight26BH"
            />
          </label>
          <br />
          <label htmlFor="Jayco174BH">
            '21 Jayflight 174BH
            <input
              id="21jayflight174bhcheckbox"
              type="checkbox"
              name="21Jayflight174BH"
            />
          </label>
          <label htmlFor="ForestRiver207BH">
            '21 Forest River 207BH
            <input
              id="21forestriver207bhcheckbox"
              type="checkbox"
              name="21ForestRiver"
            />
          </label>
          <br />
          <label htmlFor="Coachmen33BH">
            '16 Coachmen 33BH
            <input
              id="16coachmenrvcheckbox"
              type="checkbox"
              name="16Pursuit33BH"
            />
          </label>
          <br />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <br />
          <label>
            {" "}
            Send Message
            <br />
            <textarea id="message" name="message" />
          </label>
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
          <h1>Deposit feature currently under construction</h1>
          {/* <a href="/checkout >*/}
          <ul>
            <li className="nav-links deposit-button">Coming Soon!</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
function App() {
  return <ContactForm />;
}
export default App;
