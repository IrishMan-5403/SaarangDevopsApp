import React from "react";
import { useState } from "react";
import "../styles/login_signup.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [Email, setEmail] = useState("");
  const [Pword, setPword] = useState("");
  const [Fetch, setFetch] = useState(false);
  const [Result,setResult]=useState(null);
  const navigate= useNavigate();

  const logIN =() => {
    fetch("http://localhost:8000/api/signin", {
      method: "POST",

      body: JSON.stringify({
        email: Email,
        password: Pword,
      }),

      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      // Converting to JSON
      .then((response) => response.json())

      // Displaying results to console
      .then((json) => {setResult((json))});
      
  };

  const emailhandler = (e) => {
    setEmail(e.target.value);
  };
  const pwordhandler = (e) => {
    setPword(e.target.value);
  };

  const Loginhandler =() => {
    logIN();
    if (Result.success===true) {
        navigate(`../table/${Result.message._id}`)
    }

    else {
      alert(`Error:${Result.errors}`)
    }
    
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>LOGIN</h1>
      </div>
      <div className="form">
        <div className="email_id">
          Email: <br />
          <input type="text" value={Email} onChange={emailhandler}></input>
        </div>
        <div className="password">
          Password: <br />
          <input type="text" value={Pword} onChange={pwordhandler}></input>
        </div>
        <button className="login_signup-button" onClick={Loginhandler}>Login</button>
      </div>
    </div>
  );
}

export default Login;
