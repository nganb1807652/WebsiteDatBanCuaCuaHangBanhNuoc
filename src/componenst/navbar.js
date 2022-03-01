import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import '../css/navbar.css'
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const user =  cookies.get('username');
  // console.log(cookies.get('username')); 
function Navbar () {

    const logOut = () => {
        cookies.remove('username', {path: '/'});
        cookies.remove('id', {path: '/'});
        window.location.reload(true);
    }

    return(
        <header className="nav-bar">
            <div className="logo-bg">
            <img src="http://jellydemos.com/html/elixir/03/images/logo_elixir.png"/>
               
            </div>
            <ul>
                <li><Link to = "/">HOME</Link></li>
                <li><Link to = "/about">ABOUT</Link></li>
                <li><Link to = "/menu">MENU</Link></li>
                <li><Link to = "/reservations">RESERVATIONS</Link></li>
            </ul>
           

                <button className='nab-login' style={{background:'none' , border:'none'}}>

                {
                    !user ? <Link to="/login" >LOGIN</Link> :  <span onClick={logOut}  ><i class="fa fa-user-circle-o" hr aria-hidden="true" style={{color: 'white', fontSize: 20, position: 'relative', padding:0, margin:0, }}></i></span>
                }
                </button>

                <button className='nab-cart' style={{background:'none' , outline:'none', border:'none', position: 'relative', left:35}}>
                    <Link to='/cart'><i class="fa fa-shopping-cart"  aria-hidden="true" style={{color: 'white', fontSize: 20}}></i></Link>
                   
                </button>
                
             


        </header>

    )
}

export default Navbar



