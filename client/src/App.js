import React, { useState, useRef } from "react";
import Login from "./Pages/Login";
import About from "./Pages/About";
import LoggedIn from "./Pages/LoggedIn";
import Base from "./Pages/Base";
import Register from "./Pages/Register";
import './css/global.css';
import { Routes, Route } from "react-router-dom";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const getLoggedIn = () =>{
    console.log("getLoggedIn = ", loggedIn);
    return loggedIn;
  }
  const logout = () =>
  {
    setLoggedIn(false)
    console.log("logoout called");
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Base doLogout={logout}/>} />
        <Route path="/login" element={
          <Login 
            loggedIn={loggedIn} 
            doLogin={()=>{setLoggedIn(true)}}
            doLogout={logout}
          />
        } />
        <Route path="/register" element={
          <Register 
            loggedIn={loggedIn} 
            doLogin={()=>{setLoggedIn(true)}} 
            doLogout={logout}
          />
        } />
        <Route path="/about" element={
          <About 
          loggedIn={loggedIn} 
          doLogout={logout}
          doLogin={()=>{setLoggedIn(true)}}          
          />
        } />
        <Route path="/loggedin" element={
        <LoggedIn 
          loggedIn={getLoggedIn} 
          setLoggedIn={setLoggedIn} 
          doLogout={logout}
        />
        }/>
      </Routes>
    </div>
  );
}

export default App;
