import React from 'react'
import {Nav, NavLink, Bars, NavMenu} from './Nav';
// import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';


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

        
        <NavLink to="/"><h1> {img.map((index) => <img className="icon" src={index.src} title={index.title} width="40" height="40" alt=""/>)}Fantalk Sports</h1></NavLink>
        

        <Bars to="/profile" activeStyle>Profile</Bars>
        <Bars to="/contact" activeStyle>Contact Us</Bars>
        

        <NavMenu>
        
          <nav className="text-center">
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