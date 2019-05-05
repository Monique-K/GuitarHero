import React from 'react';
import './playerSection.css';

class PlayerSection extends React.Component{
  constructor() {
    super();
    this.state = {
      left: false,
      up: false,
      down: false,
      right: false
    }
  }

  componentDidMount = () => {
    document.addEventListener("keydown", this.handleButtonPress);
  }

  handleButtonPress = (e) => {
    console.log(e.keyCode)
    switch (e.keyCode) {
      case 37:
        this.setState({left: true});
        break;
      case 38:
        this.setState({up: true});
        break;
      case 40:
        this.setState({down: true});
        break;
      case 39:
        this.setState({right: true});
        break;
      default: 
        break;
    }
  }


  render() {
    return (
      <div className="playerSection">
        <i className="fas player-arrow fa-arrow-alt-circle-left" 
          onClick={this.handleButtonPress} 
          style={this.state.left === true ? {color: "blue"} : {color: "white"}}>
        </i>
        <i className="fas player-arrow fa-arrow-alt-circle-up" 
          onClick={this.handleButtonPress} 
          style={this.state.up === true ? {color: "blue"} : {color: "white"}}>
        </i>
        <i className="fas player-arrow fa-arrow-alt-circle-down" 
          onClick={this.handleButtonPress} 
          style={this.state.down === true ? {color: "blue"} : {color: "white"}}>
        </i>
        <i className="fas player-arrow fa-arrow-alt-circle-right" 
          onClick={this.handleButtonPress} 
          style={this.state.right === true ? {color: "blue"} : {color: "white"}}>
        </i>
      </div>
    );
  }
}

export default PlayerSection;

