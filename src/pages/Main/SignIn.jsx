import React from "react"
import { useState, useEffect } from "react"
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router";

const SignIn = () => {

    return (
        <div className="sign-in-container">
         <img className="sign-in-button" src="/public/google-button.png" alt="google log in"/>
         </div>
    )
}

export default SignIn