import React, {useState, useRef} from "react";
import '../css/global.css'
import Hash from "./Hash";
import Base from "./Base";
import { Link } from 'react-router-dom'
import emailjs from 'emailjs-com';

const Login = ({doLogin, doLogout}) => {
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');
  const [email, setEmail] = useState('');
  const [validLogin, setValidLogin] = useState(false);
  const [code, setCode] = useState(-1);
  const [enteredCode, setEnteredCode] = useState(null);
  const form = useRef();
  
  function getRandomInt(max) {
    return Math.floor(Math.random() * max)+1000;
  }  

  const generateCode = () => {
    setCode(getRandomInt(10000));
    return code;
  }

  const sendEmail = (e) => {
    if(!validLogin)
    {
      return false;
    }
    e.preventDefault();
    emailjs.sendForm('service_jviw56d', 'template_o6nfy0f', form.current, 'adQIcFFtCZR2jkaQd')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const authenticate = () =>{
    console.log("code hook = ", code);
    console.log("valid login = ", validLogin)
    console.log("entered code = ", enteredCode)
    if(validLogin && code == enteredCode){
      console.log("should be logged in")
      doLogin()
    }
  }



  const handleUsername = event =>{
    setUsername(event.target.value);
  }
  const handlePassword = event =>{
    setPass(event.target.value);
  }
  const handleCode = event =>{
    setEnteredCode(event.target.value)
  }

  const clear = ()=>
  {
    setUsername("");
    setPass("");
  }

  const Login = async ()=>{    
    generateCode();
    let hashedPass = pass;
    hashedPass = Hash(hashedPass);
    let rUser = "";
    try{
      const req = ('http://localhost:5000/getuser/'+ username);
      console.log(req);
      const response = await fetch(req);
      const myJson = await response.json();
      rUser = JSON.parse(myJson);
    }
    catch(err){
      console.log('login failed'); 
      return false
    }
    if(hashedPass == rUser.passwd){
      setEmail(rUser.email);
      console.log(rUser.user_name, "Verified Login")
      setValidLogin(true);
    }
  }
  return(
    <>
    <Base doLogout={doLogout}/>
    <div className="content">
      <h1>Login</h1>
      <div>
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
      value={pass}
      />
      <div>
          <button
            className="button"
            onClick={Login}>Verify
          </button>
      </div>
        <Link to={'/register'}><button className="button">Register</button></Link>
      </div>

      <form ref={form} onSubmit={sendEmail}>
      <h1>TFA</h1>
      <label>Name</label>
      <input type="text" name="name" readOnly={true} value={username} />
      <div>
      <label >Email</label>
      <input type="email" name="email" readOnly={true} value={email} />
      <button type="submit" className="button">Send</button>
      </div>
      <textarea style={{display: 'none'}} name="code" readOnly={true} value={code}/>
      </form>

      <div>
        Input Code
      <input onChange={handleCode}></input>
      <button className="button" onClick={()=>authenticate(code)}>Login</button>
      </div>
      {/* <div>code = {code}</div> */}
      </div>
    </>
  )
};

export default Login;
