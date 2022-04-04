import React, { useState } from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './Nav';
import Auth from '../../utils/auth';
import h1 from './h1.svg';
import './Sidebar.css';
import 'react-dropdown/style.css';
import Menu from '../Navbar/Menu.js';
import Toggle from '../Navbar/Toggle.js';



const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };
  const [navToggled, setNavToggled] = useState(false);

  const handleNavToggle = () => {
    setNavToggled(!navToggled);
  }
  
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={h1} alt='logo' height='180px' width='300px' color='none'/>
        </NavLink>
        <Toggle handleNavToggle={handleNavToggle}/>
     
        { navToggled ? <Menu handleNavToggle={handleNavToggle} /> : null }
        
        
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