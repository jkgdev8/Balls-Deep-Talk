import React from 'react';
import { Link } from 'react-router-dom';
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
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      
      <div className="container flex-row justify-space-between-lg justify-center align-center">
      <div className="mainhead"><Link to="/"><h1 className="head"> {img.map((index) => <img src={index.src} title={index.title} width="40" height="40" alt=""/>)}Fantalk Sports</h1>
        </Link></div>
        <nav className="text-center">
          {Auth.loggedIn() ? (
            <>
              <Link to="/profile">Profile</Link>
              <Link to="/contact">Contact Us</Link>
              
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </nav>

        
      </div>
    </header>
  );
};

export default Header;
