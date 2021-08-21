import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="top-footer">
        <p className="top-para">100% Money back</p>
        <p className="top-para">Non-contact shipping</p>
        <p className="top-para">Free delivery for order over $200</p>
      </div>
      <div className="mid-footer">
        <div className="left-footer-section">
          <img />
          <p className="left-item">
            1487 Rocky Horse Carrefour <br />
            Arlington, TX 16819
          </p>
          <span className="left-item">Show on map</span>
          <div className="left-item">facebook</div>
        </div>
        <div className="mid-footer-section">
          <p className="mid-item">Need help</p>
          <h1 className="mid-item">Phone 999999999</h1>
          <p className="mid-item">
            Monday – Friday: 9:00-20:00 <br />
            Saturday: 11:00 – 15:00
          </p>
          <hr />
          <p className="mid-item">Email: example@gamil.com</p>
        </div>
        <div className="right-footer-section">
          <table>
            <tr>
              <th>Information</th>
              <th>Account</th>
              <th>Store</th>
            </tr>
            <tr>
              <td>About us</td>
              <td>delivery information</td>
              <td>Privacy policy</td>
            </tr>
            <tr>
              <td>Bestsellers</td>
              <td>Lastest products</td>
              <td>Discount</td>
            </tr>
            <tr>
              <td>My Orders</td>
              <td>sales</td>
              <td>Terms & Conditions</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="bottom-footer">
        <p>Copyright 2021</p>
        <p>Visa</p>
      </div>
    </div>
  );
};

export default Footer;
