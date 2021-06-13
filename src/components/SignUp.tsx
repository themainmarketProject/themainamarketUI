import React from "react";
import { Form } from "./styled/index";
const Signup = () => {
  return (
    <Form>
      <p className="logo">Logo</p>
      <h2 className="sign-in-title">Sign up</h2>
      <p className="proceed">Please enter your credentials to proceed</p>
      <form action="" className="forms">
        <p className="address mail">EMAIL ADDRESS</p>
        <input
          className="input"
          type="email"
          name="email"
          autoComplete="email"
        />
        <div className="password-title">
          <p className="password">PASSWORD</p>
        </div>
        <input className="input" type="password" name="password" />

        <button type="submit">Sign Up</button>
      </form>
    </Form>
  );
};

export default Signup;
