import React from "react";

const Newsletter = () => {
  return (
    <>
      <div className="newsletter">
        <h1>
          Join our newsletter and get $20 discount <br /> for your first order
        </h1>
        <form className="form-newsletter">
          <input type="email" className="input-newsletter" placeholder="Email Address..." />
          <button className="button-newsletter">Subcribe</button>
        </form>
      </div>
    </>
  );
};

export default Newsletter;
