import React, { Component } from "react";
//import logo from './logo.svg';
import CSS from './home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import $ from 'jquery'; 
import Popper from 'popper.js'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {
  createBrowserRouter,
  Link,
  BrowserRouter as Router,
  Routes,
  Route,
  RouterProvider
} from "react-router-dom";
import Login from '../Registration/login';

const URL="http://localhost:3000/"
const App = () => {
   
   
   
  return (
    <div className={CSS.landingpage}>
      <header>
       
        <div className={CSS.container}>
          <a href="#" className={CSS.logo}>
            Your <b>Website</b>
          </a>
           
          <ul className={CSS.links}>
          <Link to="/"><li>Home</li></Link>
            <li>About Us</li>
            <li>Work</li>
            <li>Info</li>
            <Link to="/login"><li>Get Started</li></Link>
          </ul>
           
          
         
       </div>
        
      </header>
      <div className={CSS.content}>
        <div className={CSS.container}>
          <div className={CSS.info}>
            <h1>Looking For Inspiration</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus odit nihil ullam nesciunt quidem iste, Repellendus odit nihil
            </p>
            <button>Button name</button>
          </div>
          <div className={CSS.image}>
            <img src="https://i.postimg.cc/65QxYYzh/001234.png" alt="Inspiration" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
