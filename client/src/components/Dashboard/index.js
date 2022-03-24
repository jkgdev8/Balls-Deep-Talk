import React, { Component } from "react";
import Modal from './modal.js';

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
      {src:'./images/nba.jpg', title: 'nba'},
      {src:'./images/nfl.jpg', title: 'nfl'}

    ]
    return (
      <main>
        <h1>Your Favorite League</h1>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>Leagues</p>
          <div className ="teams">
            
              {img.map((index) => <img src={index.src} title={index.title} width="300" height="300" alt=""/>)}
            
            
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