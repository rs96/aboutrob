import React from "react";
import { Fonts } from "../../sections/fonts/fonts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../header";
import "./app.css";

const App = () => (
  <div className="app">
    <Router>
      <Header
        sections={["Main", "Links", "Library", "Tools", "Fonts", "Colours"]}
      />
      <div className="main-body">
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/fonts" element={<Fonts />} />
          <Route path="/colours" element={<div>Colours</div>} />
        </Routes>
      </div>
      {/* <div>{isMobile() ? "it is" : "it isn't"}</div> */}
    </Router>
  </div>
);

export default App;
