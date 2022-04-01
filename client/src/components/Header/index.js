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
        <NavLink to='/'>
          <img src={h1} alt='logo' height='180px' width='300px' color='none'/>
        </NavLink>
        <Bars />
        <NavMenu>
        {Auth.loggedIn() ? (
            <>
              
              <NavLink to="/profile" activeStyle>Profile</NavLink>
              <NavLink to="/contact" activeStyle>Contact Us</NavLink>
              <div class="search-container">
                <input type="text" name="search" placeholder="Search..." class="search-input"/>
                <a href="#" class="search-btn"> 🔎
                        <i class="fas fa-search"></i>      
                </a>
              </div>

              
             
              
              {/* <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />; */}
              


              

              
              <NavBtn>
              <NavBtnLink to='/logout' onClick={logout} >Log Out</NavBtnLink>
              </NavBtn>
              
            </>
          ) : (
            <>
              
              <NavLink to="/signup" activeStyle>Signup</NavLink>
              <NavBtn>
              <NavBtnLink to='/login'>Log In</NavBtnLink>
              </NavBtn>
            </>
          )}
        </NavMenu>
        
      </Nav>
    </>
  );
};

export default Header