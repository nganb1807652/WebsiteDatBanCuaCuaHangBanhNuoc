import React from 'react'
import '../css/login.css'
import bg from '../img/bglogo.png'
import swal from 'sweetalert';
import axios from 'axios';

export default function Register() {
    let userErr = true;
    let passwordErr = true;
    let phoneErr = true;
   
    const submitForm = (e) => {
        e.preventDefault();

        var user = document.getElementById("username").value;
        var pass = document.getElementById("password").value;
        var number = document.getElementById("phone").value;

        if(user.length == 0 || user == null){
            document.getElementById("errUsername").innerHTML = "Username is not valid !";
            document.getElementById("errUsername").style.color = "red";
            userErr = true;
        }else{
            userErr = false;
        }

        if(pass.length == 0 || pass == null){
            document.getElementById("errPassword").innerHTML = "Password is not valid !";
            document.getElementById("errPassword").style.color = "red";
            passwordErr = true;
        }else{
            passwordErr = false;
            
        }
        if(number.length < 10 || number == null ){
            document.getElementById("errPhone").innerHTML = "Phone is not valid !";
            document.getElementById("errPhone").style.color = "red";
            phoneErr = true;
        }else{
            phoneErr = false;
            
        }
    
        if(userErr == true || passwordErr == true || phoneErr == true){
            swal({
                title: "ERROR!",
                // text: "OK!",
                icon: "error",
              });
        }else {
            const obj = {
                username: user,
                password: pass,
                phone: number
            }
            axios.post("http://localhost:8080/register" , obj)
            .then(dt => {
                
                swal({
                    title: "SUCCESS!",
                    icon: "success",
                  });
            })
             window.location.href = "/login"
        }

      
    }
    return (
        <body>
        <div className="Register-all">
          <form className="Register"   onSubmit={submitForm} >
            <img src={bg} />
            <span>REGISTER</span>
                <input type='text' placeholder='Username' id="username"  />
                <p style={{fontSize: 10}} id="errUsername"></p>
                <input type='password' placeholder='Password' id='password'  />
                <p style={{fontSize: 10}} id="errPassword"></p>
                <input type='text' placeholder='Phone' id='phone'  />
                <p style={{fontSize: 10}} id="errPhone"></p>
                <input type='submit'value='REGISTER'/>
           </form>
        </div>
        </body>
      
    )
}
