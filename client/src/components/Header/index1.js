import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './Nav';

import Auth from '../../utils/auth';
import h1 from './h1.svg';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';



const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };
  
  
  return (
    <>
    
      <Nav>


        <NavLink to="/"><img src= {h1}  />
        </NavLink>
       
        
        
        
        <Bars to="/profile" activeStyle>Profile</Bars>
        <Bars to="/contact" activeStyle>Contact Us</Bars>
        

        <NavMenu>
        
          <nav >
          {Auth.loggedIn() ? (
            <>
              
              <NavLink to="/profile" activeStyle>Profile</NavLink>
              <NavLink to="/contact" activeStyle>Contact Us</NavLink>
              <NavLink to="/contact" activeStyle>Leagues</NavLink>
              {/* <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />; */}
              


              

              
              
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