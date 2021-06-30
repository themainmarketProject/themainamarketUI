import React from "react";
import { Link } from "react-router-dom";
import { Form } from "./styled/index";
import useForm from "../lib/useForm";
import "../styles/form.css";
import { clear } from "console";

const ForgotPassword = () => {
  const { inputs, handleChange, resetForm, clearForm } = useForm({
    email: "",
  });

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault(); // stop the form from submitting
    console.log(inputs);
    const url = `http://mainmarketapi.herokuapp.com/api/Auth/forgot-password/${inputs.email}`;

    fetch(url)
      .then((response) => console.log(response))
      .catch((error) => console.log("Form submit error", error));
      resetForm();
      clearForm();
  }

  return (
    <Form>
      <p className="logo">Logo</p>
      <h2 className="sign-in-title">Change Password</h2>
      <p className="proceed">Please enter your credentials to proceed</p>
      <form className="forms" method="POST" onSubmit={handleSubmit}>
        <label className="address mail">
          EMAIL ADDRESS
          <input
            className="input"
            type="email"
            name="email"
            autoComplete="email"
            onChange={handleChange}
          />
        </label>
        <button type="submit">Reset Password</button>
      </form>
    </Form>
  );
};

export default ForgotPassword;
