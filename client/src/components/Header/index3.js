import React from 'react'

const Header = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/profile" activeStyle>
            Profile
          </NavLink> 
          <NavLink to="/contact" activeStyle>
            Contact
          </NavLink> 
          <NavLink to="/logout" activeStyle>
            Logout
          </NavLink> 
        </NavMenu>
      </Nav>
    </>
  );
};

export default Header