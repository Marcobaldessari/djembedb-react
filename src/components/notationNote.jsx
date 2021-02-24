import React, { Component } from "react";

class NotationNote extends Component {
  state = {
    note: this.props.note,
    step: this.props.step,
    noteIndex: this.props.noteIndex,
  };

  render() {
    return (
      <div className="notation-note">
        <div className="notation-horizontal-line"></div>
        <div className="notation-vertical-line"></div>
        <div className={this.getNoteClasses()}></div>
      </div>
    );
  }

  getNoteClasses() {
    let classes = "notation-note-circle " + this.state.note;
    if (
      this.props.songId == this.props.songPlaying &&
      this.state.noteIndex == this.props.step
    ) {
      classes += " active";
    }
    // classes += this.props.noteIndex === this.state.step ? " active" : "";
    return classes;
  }
}

export default NotationNote;
