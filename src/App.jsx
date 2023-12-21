import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import SignIn from './pages/Main/SignIn'
import ChooseGame from './pages/Main/ChooseGame'
import Category from './pages/Main/ChooseCategory'
import Gameplay from './pages/Main/Gameplay'
import Endgame from "./pages/Main/Endgame";
import Auth0ProviderWithNavigate from "./components/Auth/Auth0ProviderWithNavigate";
import Settings from "./pages/Main/Settings";
import Difficulty from "./pages/Main/ChooseDifficulty";
import Footer from "./pages/Footer";
import { useLocation } from "react-router-dom";



const App = () => {
  const RenderFooter = () => {
    const location = useLocation()
    return location.pathname !== '/' ? <Footer/> : null
  }

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
          <Route path="/finish" element={<Endgame />}/>
          <Route path="/difficulty" element={<Difficulty />}/>
          <Route path="/settings" element={<Settings />}/>
        </Routes>
        <RenderFooter/>
        </Auth0ProviderWithNavigate>
      </div>
    </Router>
  );
};

export default App;