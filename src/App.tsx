import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from "./components/Products";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={Products} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn}/>
      </Router>
    </>
  );
}

export default App;
