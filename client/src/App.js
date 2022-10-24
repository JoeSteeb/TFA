import React, { useState } from "react";
import Btn from "./components/Btn";
import Register from "./Pages/Register";
import Login from "./Pages/Login"
import About from "./Pages/About"
import LoggedIn from "./Pages/LoggedIn";
import './css/global.css';

// const db = new sqlite3.Database(
//   './data.db', 
//   sqlite3.OPEN_READWRITE, 
//   (err)=>{
//     if (err) return console.error(err.message);
//     console.log("connection successful");
//   });

function App() {

  const [curIndex, setCurIndex] = useState(0);
  const [page, setPage] = useState(<Login setPage={() => setPage(<Register setPage={{page}}/>)}/>);
  const [navBar, setNavBar] = useState([
    ["Login", "white", 0],
    ["About", "white", 1],
    ["Logged in view", "white", 2],
    ["Admin", "white", 3]
  ]);

  const determineContents = (index)=> {
    switch(index){
      case 0:
        setPage(<Login/>);
        break;
      case 1:
        setPage(<About/>);
        break;
      case 2:
        setPage(<LoggedIn/>);
        break;
      case 3:
        setPage("test2");
        // setNavBar(navBar.filter(a=>a[0]!="Login"));
        console.log("hello")
        break;
    }
  }

  return (<center >{navBar.map((element) => (
    <span className="Header" key={element[2]}>
      <Btn
        name={element[0]}
        index={element[2]}
        onclick={() => {
          setCurIndex(element[2]);
          determineContents(element[2]);
        }}
        getCurIndex={() => {
          return curIndex;
        }}
      />
    </span>
  ))}
  <div className="Page">{page}</div>
  </center>
  )
}

export default App;
