import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import SignIn from './pages/Main/SignIn'
import ChooseGame from './pages/Main/ChooseGame'



const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header/>
        <Routes>
          <Route path="/" element={<SignIn />}/>
          <Route path="/start" element={<ChooseGame />}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;