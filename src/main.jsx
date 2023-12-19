import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import Auth0ProviderWithNavigate from "./components/Auth/Auth0ProviderWithNavigate";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";


ReactDOM.createRoot(document.getElementById("root")).render(<App />);