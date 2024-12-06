import { useState, useEffect } from "react";
import "./Contact.css";
import img from "../../assets/tax-resolution-agent-contact.jpg";

const EMAIL_REGEX = /^\S+@\S+\.\S+$/;
const PHONE_REGEX = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

export default function Contact() {
  const [firstname, setFirstname] = useState("");
  const [validFirstname, setValidFirstname] = useState(false);
  const [firstnameFocus, setFirstnameFocus] = useState(false);

  const [lastname, setLastname] = useState("");
  const [validLastname, setValidLastname] = useState(false);
  const [lastnameFocus, setLastnameFocus] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [validPhoneNumber, setValidPhoneNumber] = useState(false);
  const [phoneNumberFocus, setPhoneNumberFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  useEffect(() => {
    if (firstname === "") setValidFirstname(false);
    else setValidFirstname(true);
  }, [firstname]);

  useEffect(() => {
    if (lastname === "") setValidLastname(false);
    else setValidLastname(true);
  }, [lastname]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = PHONE_REGEX.test(phoneNumber);
    setValidPhoneNumber(result);
  }, [phoneNumber]);

  return (
    <>
      <section className="landing-contact-section">
        <img className="contact-img" src={img} alt="" />
        <form id="contact-form" action="">
          <div className="contact-header-container">
            <h3>
            Experience the 2nd Chance <span className="emph">Difference</span>.
            </h3>
            <p>
            Contact us today for a free consultation. Let us help you regain financial peace of mind.
            </p>
          </div>
          <div className="input-container">
            <div className="entry-area">
              <input
                onChange={(e) => {
                  setFirstname(e.target.value);
                }}
                onFocus={() => setFirstnameFocus(true)}
                onBlur={() => setFirstnameFocus(false)}
                value={firstname}
                aria-invalid={validFirstname ? "false" : "true"}
                type="text"
                name=""
                id=""
                required
              />
              <div className="labelline">Firstname</div>
            </div>

            <div className="entry-area">
              <input
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
                onFocus={() => setLastnameFocus(true)}
                onBlur={() => setLastnameFocus(false)}
                value={lastname}
                aria-invalid={validLastname ? "false" : "true"}
                type="text"
                name=""
                id=""
                required
              />
              <div className="labelline">Lastname</div>
            </div>

            <div className="entry-area">
              <input
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
                onFocus={() => setPhoneNumberFocus(true)}
                onBlur={() => setPhoneNumberFocus(false)}
                value={phoneNumber}
                aria-invalid={validPhoneNumber ? "false" : "true"}
                type="text"
                name=""
                id=""
                required
              />
              <div className="labelline">Phone number</div>
            </div>

            <div className="entry-area">
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
                value={email}
                aria-invalid={validEmail ? "false" : "true"}
                type="text"
                name=""
                id=""
                required
              />
              <div className="labelline">Email</div>
            </div>

            <input
              disabled={
                !validFirstname ||
                !validLastname ||
                !validPhoneNumber ||
                !validEmail
                  ? true
                  : false
              }
              value="LET'S DO THIS!"
              className="contact-submit"
              type="submit"
              name=""
              id=""
            />
          </div>
        </form>
      </section>
    </>
  );
}
