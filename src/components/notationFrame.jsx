import React, { Component } from "react";
import NotationNote from "./notationNote";

class NotationFrame extends Component {
  state = {
    song: this.props.song,
    notes: "",
  };

  //   var notes;
  render() {
    return (
      <div className="notation-frame">
        <p>{this.getNote()}</p>
        {this.state.notes.map((i) => (
          <NotationNote key={i} note={i} />
        ))}
      </div>
    );
  }

  getNote = () => {
    this.state.notes = this.props.song.match(/.{1,2}/g);
  };
}

export default NotationFrame;
