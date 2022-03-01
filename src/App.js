import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

// import components
import Navbar from './componenst/navbar';
import home from './page/home';
import register from './page/register';
import login from './page/login';
import about from './page/about';
import menu from './page/menu';
import ProductType from './page/menuType';
import reservations from './page/reservations'
import Details from './page/details'
import Cart from './page/cart';
import Checkout from './page/checkout';


export default function App() {
  return (
    <div>
      <Router>
         <Navbar/> 
          <Switch>
               <Route exact path='/' component={home } />
               <Route exact path='/register' component={ register } />
               <Route exact path='/login' component={ login } />
               <Route exact path='/about' component={about} />
               <Route exact path='/menu' component={menu} />
               <Route exact path='/menu/type=:type' component={ProductType} />
               <Route exact path='/reservations' component={reservations} />
               <Route exact path='/details/id=:id' component={Details} /> 
               <Route exact path='/cart' component={Cart} />
               <Route exact path='/checkout' component={Checkout} />  
               
          </Switch> 
        </Router> 
    </div>
  )
}
