import React from 'react';
import { FaBeer,FaGithub, FaFacebook, FaInstagramSquare, FaTwitter, FaLinkedin   } from 'react-icons/fa';


class Footer extends React.Component  {
  render() {
  return (
    <footer>
      <div className="containers">
        &copy;{new Date().getFullYear()} by JDM Sports
        
      </div>
      <div className="containers" >
        
        
        Socials: <FaGithub/> <FaFacebook/> <FaInstagramSquare/> <FaTwitter/> <FaLinkedin/>
      </div>
      
    </footer>
  );
  }
};


export default Footer;
