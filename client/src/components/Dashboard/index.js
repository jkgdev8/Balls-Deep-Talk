import React, { Component } from "react";
import { Zoom } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css';

import { Link } from "react-router-dom";

// import image from '../images/nba.jpg';


class Dashboard extends Component {
  
  render() {
  const images = [
    {src:'./images/lebron.jpg', title: '/nba', tag: ('NBA - National Basketball Association 🏀')},
    {src:'./images/mookie.jpg', title: '/mlb', tag: ('MLB - Major League Baseball ⚾️') },
    {src:'./images/aaron.jpg', title: '/nfl', tag: ('NFL - National Football League 🏈')},
    {src:'./images/jake.jpg', title: '/nhl', tag: ('NHL - National Hockey League 🏑')},
    {src:'./images/zlatan.jpg', title: '/mls', tag: ('MLS - Major League Soccer ⚽')}
  
    
  ]
  const zoomInProperties = {
    indicators: true,
    scale: 1.4
  }


  return (
    <div>
      <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
          <div key={index} style={{width: "auto" }}>
           <Link   to={each.title}> <img className="mainimage" style={{ objectFit: "cover", width: "100%" }} src={each.src} title={each.title}  alt=""/></Link>
           <div><Link to={each.title}> <p className="ptag" >{each.tag} </p></Link></div>

          </div>
          
        ))}
       
        
      </Zoom>
    </div>
  )
}
};



export default Dashboard