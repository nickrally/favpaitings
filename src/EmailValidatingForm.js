import { useReducer, useState } from "react";
import useInterval from "./useInterval";

function EmailValidatingForm() {
  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };
  const [emailValid, setEmailValid] = useState(false);
  const emailReducer = (prevState, currentState) => {
    const isValidEmail = validateEmail(currentState);
    setEmailValid(isValidEmail);
    return currentState;
  };

  const [email, setEmail] = useReducer(emailReducer, "");
  const maxSeconds = 30;
  const [count, setCount] = useState(maxSeconds);

  useInterval(() => {
    setCount(count - 1);
  }, 1000);

  return (
    <div className="container">
      <br />
      <div>
        <div className="content">
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            disabled={count <= 0}
            value={email}
            placeholder="Enter email"
            type="email"
            name="email"
            required
          />
          &nbsp;&nbsp;&nbsp;
          <button
            disabled={!emailValid || count <= 0}
            onClick={() => {
              setCount(0);
              alert(`button clicked with email ${email}`);
            }}
            className="btn-lg"
            type="submit"
          >
            PRESS
          </button>
        </div>
        {count > 0
          ? `You have ${count} seconds to enter email`
          : "email entered or time expired"}
      </div>
    </div>
  );
}
export default EmailValidatingForm;
