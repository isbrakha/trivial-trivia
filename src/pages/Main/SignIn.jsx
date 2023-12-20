import React from "react"
import { useState, useEffect } from "react"
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router";

const SignIn = () => {
    const {loginWithRedirect} = useAuth0()
    const handleLogin = async () => {
        await loginWithRedirect({
          appState: {
            returnTo: "/start",
          },
        });
      };
 
    return (
        <div id="sign-in-container">
         <img className="sign-in-button" src="src/assets/google-button.png" alt="google log in" onClick={handleLogin}/>
         </div>
    )
}

export default SignIn