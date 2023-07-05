import React, { useEffect, useRef } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import axios from "axios";

export default function App() {
 const sendTokenToBackend = (token) => {
   const url = `/api/user/googleSignUp?id_token=${encodeURIComponent(
     token
   )}`;
   axios
     .post(url)
     .then((response) => {
       console.log(response.data);
     })
     .catch((error) => {
       console.error("Error decoding token:", error);
     });
 };


  const handleLoginSuccess = (credentialResponse) => {
    console.log(credentialResponse);
    const  idToken  = credentialResponse.credential;
    console.log(idToken)
    sendTokenToBackend(idToken);
  };

  const handleLoginError = () => {
    console.log("Login Failed");
  };

  return (
    <div className="">
      Hello
      <GoogleOAuthProvider clientId="YOUR_CLIENT_ID">
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginError}
        />
      </GoogleOAuthProvider>
    </div>
  );
}
