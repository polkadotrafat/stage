import React from "react";
import Footers from "./Footers";
import Home from "./Home";
import ProgressBar from "./ProgressBar";
import Create from "./Create";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Headers/Navbar";
import { SubstrateContextProvider, useSubstrateState } from './substrate-lib'
import "./App.scss";

function App() {
  return (
    <SubstrateContextProvider>
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/Create" element={<Create />} />
        </Routes>
        <Footers />
        <ProgressBar />
      </div>
    </Router>
    </SubstrateContextProvider>
  );
}

export default App;
