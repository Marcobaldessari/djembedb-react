import React, { Component } from "react";

class NotationFrame extends Component {
  state = {
    song: this.props.song,
  };

  render() {
    return <div className="notation-frame"></div>;
  }
}

export default NotationFrame;
