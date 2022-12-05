import '../css/global.css'
import Base from "./Base";
import React, {useEffect, useState} from "react";

const LoggedIn = ({loggedIn, doLogout}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(<div>No</div>)
    useEffect(()=>{
        setIsLoggedIn(loggedIn());
        console.log("useEffect called");
        if(loggedIn())
        {
            setIsLoggedIn(<h1>YES</h1>);
        }
        else{
            setIsLoggedIn(<h1>No</h1>);
        }
    },[loggedIn]);
        
   return (
       <center>
           <Base doLogout={doLogout}/>
           <div>
                {isLoggedIn}
            </div>
       </center>
   );


};

export default LoggedIn;