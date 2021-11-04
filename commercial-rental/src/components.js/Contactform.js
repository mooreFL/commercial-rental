// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from "react";
import "../styles/Contact.css"
import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("xjvjqbvw");
  // if (state.succeeded) {
  //     return <button>Send Another Message</button>;
  // }
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Request Quote</label>
        <br/>
        <input id="name" type="name" name="name" placeholder="Full Name"/>
        <input id="email" type="email" name="email" placeholder="Email"/>
        <br/>
        <label> Pick Up Date </label>
        <br/>
        <input id="pickupdate" type="date" name="pickup" />
        <br/>
        <label> Return Date </label>
        <br/>
        <input id="dropdate" type="date" name="dropdate" />
        <br/>
        <label for="shasta">Shasta 310k</label>
        <input id="trailercheckbox1" type="checkbox" name="Shasta310k" />
        <label for="Jayco26BH">Jayflight 26BH</label>
        <input id="trailercheckbox1" type="checkbox" name="Jayflight26BH" />
        <label for="Coachmen33BH">Coachmen 33BH</label>
        <input id="trailercheckbox1" type="checkbox" name="Pursuit33BH" />

        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <br/>
        <label> Send A Message </label>
        <br/>
        <textarea id="message" name="message" />
        {state.succeeded ? (
          <button className="formButton" type="submit"> Sent !</button>
        ) : (
          <button className="formButton" type="submit" disabled={state.submitting}>
            Submit
          </button>
        )}
      </form>
    </div>
  );
}
function App() {
  return <ContactForm />;
}
export default App;
