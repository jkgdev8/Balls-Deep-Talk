import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './Nav';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import h1 from './h1.svg';


const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };
  let img = [
    {src:'./images/fs.png', title: 'fs'},
    

  ]
  return (
    <>
      <Nav>

        
        <NavLink to="/"><img className ="fantalk" src= {h1}  />
        </NavLink>
        

        <Bars to="/profile" activeStyle>Profile</Bars>
        <Bars to="/contact" activeStyle>Contact Us</Bars>
        

        <NavMenu>
        
          <nav >
          {Auth.loggedIn() ? (
            <>
              <NavLink to="/profile" activeStyle>Profile</NavLink>
              <NavLink to="/contact" activeStyle>Contact Us</NavLink>
              
              
              <a href="/" onClick={logout}>
                Logout
              </a>
              
            </>
          ) : (
            <>
              <NavLink to="/login" activeStyle>Login</NavLink>
              <NavLink to="/signup" activeStyle>Signup</NavLink>
            </>
          )}
          </nav>
          
        </NavMenu>

        
        
      </Nav>
    </>
  );
};

export default Header