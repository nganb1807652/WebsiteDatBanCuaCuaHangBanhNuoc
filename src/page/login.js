import React from 'react'
import '../css/login.css'
import bg from '../img/bglogo.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';
import Cookies from 'universal-cookie';
 
const cookies = new Cookies();

export default function Login() {
    const [username ,setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const handleUser  = (e) => {
     setUsername(e.target.value)
    }
    const handlePassword = (e) => {
      setPassword(e.target.value)
    }
    const submitForm = (e) => {
      e.preventDefault();
      // console.log(password);
      // console.log(username);
       const obj = {
        user: username,
        pass: password,
      
    }
     axios.post("http://localhost:8080/login" , obj)
     .then(dt=>{
        //  console.log(dt.data);
       if(dt.data.valid == true){
        cookies.set('id', dt.data.userID, { path: '/' });
        cookies.set('username', dt.data.userName, { path: '/' });
        // console.log(cookies.get('username')); 
          swal({
            title: "Login Successfully !",
            // text: "OK!",
            icon: "success",
           });
          window.location.href = "/";
       }else {
          swal({
            title: "Password Wrong !",
            // text: "OK!",
            icon: "error",
           });
       }
     })

  }

  return (
    <body>
      <div className="Register-all">
        <form className="Register" onSubmit={submitForm}>
          <img src={bg} />
          <span>LOGIN </span>
            <input type='text' placeholder='Username' value={username} onChange={handleUser} />
            <input type='password' placeholder='Password' value={password} onChange={handlePassword} />
            <Link to="/register"><p style={{fontSize:"12px",fontStyle: "italic"}}>Do you have an account ?</p></Link>
            <input type='submit' value='LOGIN'/>
      </form>
      </div>
    </body>
    
  )
}

