import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from "./components/Products";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ForgotPassword from './components/ForgotPassword';
import MyAccount from './components/MyAccount';
import AddressBook from './components/AddressBook';

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={Products} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/my-account" component={MyAccount}/>
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/address-book" component={AddressBook} />
      </Router>
    </>
  );
}

export default App;
