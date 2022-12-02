import React, { useState } from "react";
import Btn from "./components/Btn";
import Login from "./Pages/Login";
import About from "./Pages/About";
import LoggedIn from "./Pages/LoggedIn";
import Base from "./Pages/Base";
import './css/global.css';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Base/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/loggedin" element={<LoggedIn/>} />
      </Routes>
    </div>
  );
}

export default App;
