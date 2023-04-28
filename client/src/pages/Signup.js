import React from "react";
import { useState } from "react";
import '../styles/login_signup.css';
import { useNavigate } from "react-router-dom"


function Signup() {
    
    const [Uname,setUname]=useState('');
    const [Email,setEmail]=useState('');
    const [Pword,setPword]=useState('');
    const [Pwordconfo,setPwordconfo]=useState('');
    const [Phno,setPhno]=useState();
    const [Rno,setRno]=useState('');
    const [Result,setResult]=useState(null);
    const navigate= useNavigate();

    const signIN =  () => {
      fetch("http://localhost:8000/api/signup", {
        method: "POST",

        body: JSON.stringify({
          name: Uname,
          email: Email,
          password: Pword,
          password_confirmation: Pwordconfo,
          phno: Phno,
          rno: Rno,
          hostel: Hostel,
        }),

        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        // Converting to JSON
        .then((response) => response.json())

        // Displaying results to console
        .then((json) => {setResult(json)});
    };

    const namehandler=(e)=>{
        setUname(e.target.value);
    }

    const emailhandler=(e)=>{
        setEmail(e.target.value);
    }

    const pwordhandler=(e)=>{
    setPword(e.target.value);
    }

    const pwordconhandler=(e)=>{
        setPwordconfo(e.target.value);
    }

    const phnohandler=(e)=>{
        setPhno(e.target.value);
    }
    const rnohandler=(e)=>{
        setRno(e.target.value);
    }

    const signuphandler=()=>{
        signIN();
        if (Result.success===true) {
            navigate(`../table/${Result.result._id }`)
        }

        else {
          alert(`Error:${Result.errors}`)
        }

}

    const options = [
        { value: 'Cauvery', label: 'Cauvery' },
        { value: 'Mandakini', label: 'Mandakini' },
        { value: 'Tapti', label: 'Tapti' },
      ];

      const [Hostel, setHostel] = useState(null);
      const [isOpen, setIsOpen] = useState(false);
    
      function handleOptionClick(option) {
          
        setHostel(option.value);
        setIsOpen(false);
      }

    return (
      <div className="container">
        <div className="heading">
          <h1>SignUp</h1>
        </div>
        <div className="form">
          <div className="Uname">
            {" "}
            UserName: <br />
            <input type="text" value={Uname} onChange={namehandler}></input>
          </div>

          <div className="email_id">
            Email: <br />
            <input type="text" value={Email} onChange={emailhandler}></input>
          </div>
          <div className="password">
            Password: <br />
            <input
              type="text"
              value={Pword}
              onChange={pwordhandler}
            ></input>
          </div>
          <div className="password_confirm">
            {" "}
            Confirm Password:
            <br />
            <input
              type="text"
              value={Pwordconfo}
              onChange={pwordconhandler}
            ></input>
          </div>
          <div className="Phno">
            Contact No: <br />
            <input type="text" value={Phno} onChange={phnohandler}></input>
          </div>
          <div className="Rno">
            Roll No:
            <br />
            <input type="text" value={Rno} onChange={rnohandler}></input>
          </div>
          <div className="Hostel">
            Hostel:
            <div className="dropdown-menu">
              <button
                className="dropdown-toggle"
                onClick={() => setIsOpen(!isOpen)}
              >
                {Hostel ? Hostel : "Select your Hostel"}
              </button>
              {isOpen && (
                <ul className="dropdown-menu-options">
                  {options.map((option) => (
                    <li
                      key={option.value}
                      onClick={() => handleOptionClick(option)}
                    >
                      {option.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <button className="login_signup-button" onClick={signuphandler}>
            Signup
          </button>
        </div>
      </div>
    );
}


export default Signup;