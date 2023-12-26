
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
          <li>
            <a href="/" className="button ">Home</a>
            </li>
        <li>
          <a href="/about" className="button ">Profile</a>
          </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

