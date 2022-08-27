import "./HeroTwoStyles.css";
import React, { Component } from "react";

class HeroTwo extends Component {
  render() {
    return (
      <div className="hero-img">
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
          <h2>{this.props.title}</h2>
          <p>{this.props.subhead}</p>
        </div>
      </div>
    );
  }
}

export default HeroTwo;
