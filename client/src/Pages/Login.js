import React, {useState} from "react";
import '../css/global.css'
import Hash from "./Hash";
import Base from "./Base";

const Login = () => {
  
  let username = "";
  let email = "";
  let pass = "";
  let pass2 = "";
  const [displayPassword, setDisplayPassword] = useState("");
  const [flipper, setFlipper] = useState(false);
  const [btnText, setBtnText] = useState("Click To Register");

  const clear = ()=>{
    username = "";
    email = "";
    pass = "";
    pass2 = "";
  }

  const handleUsername = event =>{
    username = event.target.value;
  }
  const handleEmail = event =>{
    email = event.target.value;
  }
  const handlePassword = event =>{
    pass = event.target.value;
  }
  const handlePassword2 = event =>{
    pass2 = event.target.value;
  }

  const createUser = async ()=>{
    let hashedPass = pass;
    hashedPass = Hash(hashedPass);
    if(pass === pass2 
      && (username !== ""
      || pass !== ""
      || pass2 !== "")){
      const body = {
        username: username,
        password: hashedPass,
        email: email
      };
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      const myJson = await response.json();
      console.log(myJson)
    }
  }

  const Login = async ()=>{
    let hashedPass = pass;
    hashedPass = Hash(hashedPass);
    const req = ('http://localhost:5000/getuser/'+ username);
    console.log(req);
    const response = await fetch(req);
    const myJson = await response.json();
    let rUser = JSON.parse(myJson);
    if(hashedPass == rUser.passwd){
      console.log(rUser.user_name, " LOGGED IN")
    }
  }

  const login = <div>
    <div>Username</div>
    <input 
    id="name"
    name = "username"
    type="text"
    onChange={handleUsername}
    value={username}
    />
    <div>Password</div>
    <input 
    id="pass"
    name = "pass"
    type="password"
    onChange={handlePassword}
    />
    <div>
      <button
      onClick={Login}>Login</button>
    </div>
    </div>;

  const handleRegister = ()=>{
    createUser();
    clear();
    setBtnText("Click To Register");
    username = "";
    pass = "";
    setPage(login);
  }

  const [page, setPage] = useState(login);
  const register = (<div>
    <div>Username</div>
    <input 
        id="username"
        name = "username"
        onChange={handleUsername}
        />
    <div>Email</div>
    <input 
        id="email"
        name = "email"
        onChange={handleEmail}
        />
    <div>Password</div>
    <input 
        id="pass"
        name = "pass"
        type="password"
        onChange={handlePassword}
        />
    <div>Retype Password</div>
    <input 
        id="pass2"
        name = "pass2"
        type="password"
        onChange={handlePassword2}
        />
    <div>
      <button onClick={handleRegister}>Register</button>
    </div>
  </div>);

    const click = ()=>{
      if(flipper){
        console.log("normal");
        setPage(login);
        setBtnText("Click To Register");
        return false;
      }
      else{
        console.log("reg");
        setPage(register)
        setBtnText("Return to login");
        return true;
      }
    }

    return(
    <>
    <Base/>
      <center>
      <div>{page}</div>
      <div>
        <button onClick={()=>setFlipper(click())}>{btnText}</button>
      </div>
      </center>
    </>)
};

export default Login;
