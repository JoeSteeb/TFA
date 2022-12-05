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
            setIsLoggedIn(
            <h1>Logged in</h1>
            );
        }
        else{
            setIsLoggedIn(<h1>Not logged in</h1>);
        }
    },[loggedIn]);
        
   return (
       <>
       <Base doLogout={doLogout}/>
            <div className='content'>
                <div>
                    {isLoggedIn}
                </div>
            </div>
       </>
   );


};

export default LoggedIn;