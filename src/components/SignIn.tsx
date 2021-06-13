import React from "react";
import { Link } from "react-router-dom";
import { Form } from "./styled/index";
import "../styles/form.css";

const SignIn = () => {
  return (
    <Form>
      <p className="logo">Logo</p>
      <h2 className="sign-in-title">Sign in</h2>
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
          <p className="forgot">Forgot password?</p>
        </div>
        <input className="input" type="password" name="password" />

        <Link to="/nav/dashboard">
          <button type="submit">Sign in</button>
        </Link>

        <p className="have-account">
          Don't have an account?{" "}
          <Link to="/signup">
            <span>Sign up</span>
          </Link>
        </p>
      </form>
    </Form>
  );
};

export default SignIn;
