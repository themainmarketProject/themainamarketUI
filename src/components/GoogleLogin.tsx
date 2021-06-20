import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import { Redirect } from "react-router-dom";
import { postData } from "../lib/postData";

interface MyProps {}

interface MyState {
  redirectToReferrer: boolean
}

class Googlelogin extends Component <MyProps, MyState> {
    constructor(props: any) {
        super(props);
        this.state = {
            redirectToReferrer: false,
        };
    }

    signup = (res: any, type: string) => {
        let pstData;

        if (type === "google" && res.profileObj) {
            pstData = {
                token: res.tokenId,
            };
        }
        console.log(pstData);
        postData("signup", pstData).then((result: any) => {
          let responseJson = result;
          if (responseJson.userData) {
            sessionStorage.setItem("userData", JSON.stringify(responseJson));
            this.setState({ redirectToReferrer: true });
          }
        });
    };

    render() {
        if (this.state.redirectToReferrer) {
          return <Redirect to={"/"} />;
        }

        const responseGoogle = (response: unknown) => {
            console.log(response);
            this.signup(response, "google")
        };
    return (
      <GoogleLogin
        clientId="366030433327-34llmnvmrjbn83htiqj4edr84m16pa8e.apps.googleusercontent.com"
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    );
  }
}

export default Googlelogin;