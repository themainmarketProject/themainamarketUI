import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import Header from "./header/Header";
import jwt_decode from "jwt-decode";
import getToken from "../lib/getToken";
import { Paper, Card } from "./styled/index";
import "./MyAccount.css";
import { Link } from "react-router-dom";

interface Contact {
    email: string,
    name: string,
    surname: string,
}

interface Address {
  data: {
    houseNumber: string;
    streetName: string;
    city: string;
    state: string;
    country: string;
  };
}

function MyAccount() {
    const [contact, setContact] = useState<Contact>({
      email: "",
      name: "",
      surname: "",
    });

    const [address, setAddress] = useState<Address>({
      data: {
        houseNumber: "",
        streetName: "",
        city: "",
        state: "",
        country: "",
      },
    });

    useEffect(() => {
        let decode = getToken("myToken");
        if (decode === "user") {
        setContact({...contact, name: "user",});
        } else {
        decode = jwt_decode(decode!);
        let data: any = decode;
        console.log(data);
        let obj = {
            email: data["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"],
            name: data["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"],
            surname: data["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname"]
        };
        setContact(obj);
        }
        const token = localStorage.getItem("myToken");
        const headers = { 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        };
        console.log(token);
        fetch("http://mainmarketapi.herokuapp.com/api/Contact/get-user-contact", { headers })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setAddress(data)
        });
    }, []);

  return (
    <div>
      <Header />
      <div className="content">
        <SideBar />
        <Paper>
          <div className="card body">
            <h3>Account Overview</h3>
            <hr />
            <div className="container">
              <Card>
                <div className="section small-card">
                  <p>ACCOUNT DETAILS</p>
                  <hr className="separator" />
                  <br />
                  <p>{contact.name}{" "}{contact.surname}</p>
                  <p>
                    <em className="mail">{contact.email}</em>
                  </p>
                  <br />
                  <p className="change_password">
                    <Link to="/change-password" className="change_password">
                      CHANGE PASSWORD
                    </Link>
                  </p>
                </div>
              </Card>
              <Card>
                <div className="section small-card">
                  <p>ADDRESS BOOK</p>
                  <hr className="separator" />
                  <br />
                  <p>Your Default Shipping Address:</p>
                  <p>{address.data.houseNumber}{", "}{address.data.streetName}</p>
                  <p>{address.data.city}{" "}{address.data.state}{". "}{address.data.country}</p>
                </div>
              </Card>
              <Card>
                <div className="section small-card">
                  <p>MAIN MARKET PRIME</p>
                  <hr className="separator" />
                </div>
              </Card>
              <Card>
                <div className="section small-card">
                  <p>MAIN MARKET STORE CREDIT</p>
                  <hr className="separator" />
                </div>
              </Card>
            </div>
          </div>
        </Paper>
      </div>
    </div>
  );
}

export default MyAccount;
