import React from "react";
import { Link } from "react-router-dom";
import { Form } from "./styled/index";
import useForm from "../lib/useForm";
import Googlelogin from "./GoogleLogin";
import FaceBook from "./FaceBookLogin";
import "../styles/form.css";

const SignIn = () => {
  const { inputs, handleChange, resetForm } = useForm({
    email: "",
    password: "",
  });

   async function handleSubmit(e: { preventDefault: () => void }) {
     e.preventDefault(); // stop the form from submitting
     console.log(inputs);
     const url = "http://mainmarketapi.herokuapp.com/api/Auth/login";


     const requestOptions = {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify(inputs),
     };

     fetch(url, requestOptions)
       .then((response) => console.log(response))
       .catch((error) => console.log("Form submit error", error));
     resetForm();
   }
  
  return (
    <Form>
      <p className="logo">Logo</p>
      <h2 className="sign-in-title">Sign in</h2>
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
        <label className="password">
          PASSWORD
          <input className="input" type="password" name="password" onChange={handleChange} />
        </label>
        <button type="submit">Sign in</button>
        <Googlelogin />
        <FaceBook />
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
