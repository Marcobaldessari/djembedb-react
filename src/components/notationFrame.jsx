import React, { Component } from "react";
import NotationNote from "./notationNote";
var uniqid = require("uniqid");

class NotationFrame extends Component {
  state = {
    song: this.props.song,
    // notes: this.props.song.match(/.{1,2}/g),
    notes: this.props.song.split(" "),
  };

  render() {
    return (
      <div className="notation-frame">
        {this.state.notes.map((i) => (
          <NotationNote key={uniqid()} note={i} />
        ))}
      </div>
    );
  }
}

export default NotationFrame;
