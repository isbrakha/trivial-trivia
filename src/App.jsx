import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import SignIn from './pages/Main/SignIn'
import ChooseGame from './pages/Main/ChooseGame'
import Category from './pages/Main/ChooseCategory'
import Gameplay from './pages/Main/Gameplay'
import Auth0ProviderWithNavigate from "./components/Auth/Auth0ProviderWithNavigate";
import { createRoot } from "react-dom/client";


const container = document.getElementById("root");



const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header/>
        <Auth0ProviderWithNavigate>
        <Routes>
          <Route path="/" element={<SignIn />}/>
          <Route path="/start" element={<ChooseGame />}/>
          <Route path="/category" element={<Category />}/>
          <Route path="/play" element={<Gameplay />}/>

        </Routes>
        </Auth0ProviderWithNavigate>
      </div>
    </Router>
  );
};

export default App;