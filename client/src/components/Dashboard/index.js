import React, { Component } from "react";
import Modal from './modal.js';
import { Link } from "react-router-dom";

// import image from '../images/nba.jpg';


class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  
  render() {
    let img = [
      {src:'./images/nba.jpg', title: '/nba'},
      {src:'./images/nfl.jpg', title: '/nfl'},
      {src:'./images/mlb.jpg', title: '/mlb'},
      {src:'./images/mls.jpg', title: '/mls'},
      {src:'./images/nhl.jpg', title: '/nhl'},

    ]
    return (
      <main>
        <h1>Your Favorite League</h1>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>Leagues</p>
          <div className ="teams">
            
              {img.map((image, idx) => <Link to= {image.title}> <img src={image.src} title={image.title} width="300" height="300" alt=""/></Link>)}
          </div>
        </Modal>
        <button type="button" onClick={this.showModal}>
          Open
        </button>
        <div> 
          
            </div>
      </main>
    );
  }
}

export default Dashboard