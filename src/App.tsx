import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_CATEGORIES, SUB_CATEGORIES, PRODUCTS } from "./lib/graphQlQuery";
import Products from "./components/Products";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/ForgotPassword";
import MyAccount from "./components/MyAccount";
import AddressBook from "./components/AddressBook";

function App() {
  const {
    loading: loading1,
    error: error1,
    data: data1,
  } = useQuery(GET_CATEGORIES);
  const categories = { loading1, error1, data1 };
  const {
    loading: loading2,
    error: error2,
    data: data2,
  } = useQuery(SUB_CATEGORIES);
  const subCategory = { loading2, error2, data2 };

  const { loading: loading3, error: error3, data: data3 } = useQuery(PRODUCTS);
  const products = { loading3, error3, data3 };
  return (
    <>
      <Router>
        <Route
          path="/"
          exact
          render={() => (
            <Products
              category={categories}
              subCategory={subCategory}
              product={products}
            />
          )}
        />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/my-account" render={() => (
          <MyAccount
            {...categories}
          />
        )}
        />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/address-book" render={() => (
          <AddressBook
            {...categories}
          />
        )} />
      </Router>
    </>
  );
}

export default App;
