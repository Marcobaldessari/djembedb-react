import React, { Component } from "react";

class ButtonPlaySmall extends Component {
  state = {
    isPlaying: false,
  };

  render() {
    return <button className="btn btn-play paused">PLAY</button>;
  }

  getButtonClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default ButtonPlaySmall;
