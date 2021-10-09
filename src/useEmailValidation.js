import React, { useState, useReducer } from "react";
import useInterval from "./useInterval";

function useEmailValidation(maxSeconds) {
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
  const [count, setCount] = useState(maxSeconds);

  useInterval(() => {
    setCount(count - 1);
  }, 1000);

  const emailObj = {
    email,
    setEmail,
    emailValid,
    count,
    setCount,
  };
  return emailObj;
}
export default useEmailValidation;
