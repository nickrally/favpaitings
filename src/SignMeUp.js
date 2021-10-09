import { useState, useContext } from "react";
import { ConfigContext } from "./App";

const SignMeUp = ({ signupCallback }) => {
  const ctx = useContext(ConfigContext);
  const [email, setEmail] = useState("");
  return ctx.showSignMeUp === false ? null : (
    <div className="container">
      <div>
        <div className="content">
          <input
            placeholder="Enter email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          &nbsp;
          <button
            disabled={!email.includes("@")}
            className="btn"
            type="submit"
            onClick={() => {
              signupCallback(email);
              setEmail("");
              alert("confirmed");
            }}
          >
            Get Updates
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignMeUp;
