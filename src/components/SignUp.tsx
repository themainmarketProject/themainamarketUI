// import React from "react";
import useForm from "../lib/useForm";
import { Form } from "./styled/index";
// import { Link } from "react-router-dom";

const Signup = () => {
   const { inputs, handleChange, resetForm } = useForm({
     email: "",
     firstName: "",
     lastName: "",
     gender: "",
     password: "",
     confirmPassword: "",
   });
  
  async function handleSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault(); // stop the form from submitting
    console.log(inputs);
    const url = "http://mainmarketapi.herokuapp.com/api/Auth/register-user";

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputs),
    };

    fetch(url, requestOptions)
      .then((response) => console.log("Submitted successfully"))
      .catch((error) => console.log("Form submit error", error));
    resetForm();
  }

  return (
    <Form>
      <p className="logo">Logo</p>
      <h2 className="sign-in-title">Register</h2>
      <p className="proceed">Please enter your credentials to proceed</p>
      <form className="forms" method="POST" onSubmit={handleSubmit}>
        <label className="firstname">
          FIRST NAME
          <input
            className="input"
            type="text"
            name="firstName"
            autoComplete="firstName"
            value={inputs.firstName}
            onChange={handleChange}
          />
        </label>
        <label className="lastname">
          LAST NAME
          <input
            className="input"
            type="text"
            name="lastName"
            autoComplete="lastName"
            value={inputs.lastName}
            onChange={handleChange}
          />
        </label>
        <label className="gender">
          GENDER
          <select
            className="input"
            value={inputs.gender}
            name="gender"
            onChange={handleChange}
          >
            <option value="">Select Your Sex</option>
            <option value="male">MALE</option>
            <option value="female">FEMALE</option>
          </select>
        </label>
        <label className="address mail">
          EMAIL ADDRESS
          <input
            className="input"
            type="email"
            name="email"
            autoComplete="email"
            value={inputs.email}
            onChange={handleChange}
          />
        </label>
        <label className="password">
          PASSWORD
          <input
            className="input"
            type="password"
            name="password"
            value={inputs.password}
            onChange={handleChange}
          />
        </label>
        <label className="confirm-password">
          CONFIRM PASSWORD
          <input
            className="input"
            type="password"
            name="confirmPassword"
            value={inputs.confirmPassword}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </Form>
  );
};

export default Signup;
