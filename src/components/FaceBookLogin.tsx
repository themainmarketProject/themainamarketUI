import React, { Component }from "react";
import FacebookLogin from "react-facebook-login";
import { postData } from "../lib/postData";
import { Redirect } from "react-router-dom";

interface MyProps {}

interface MyState {
  redirectToReferrer: boolean;
}

class FaceBook extends Component<MyProps, MyState> {
    constructor(props: any) {
        super(props);
        this.state = {
          redirectToReferrer: false,
        };
    }

    signup = (res: any, type: string) => {
        let pstData;
        
        if (type === 'facebook' && res.email) {
             pstData = {
               token: res.accessToken,
             };
        }
        console.log(pstData)
        postData(type, pstData).then((result: any) => {
            let responseJson = result;
            if (responseJson.userData) {
                sessionStorage.setItem('userData', JSON.stringify(responseJson));
                this.setState({ redirectToReferrer: true });
            }
        })
    }

    render() {
        if (this.state.redirectToReferrer) {
            return (<Redirect to={'/'}/>)
        }

        const responseFacebook = async(response: unknown) => {
            console.log(response);
            this.signup(response, "facebook")
        };
        return (
          <FacebookLogin
            appId="803177633904696"
            autoLoad={true}
            fields="name,email,picture"
            callback={responseFacebook}
          />
        );
    }
}

export default FaceBook