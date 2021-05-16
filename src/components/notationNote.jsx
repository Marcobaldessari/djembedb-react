import React, { Component } from "react";

class NotationNote extends React.PureComponent {
  render() {
    return (
      <div className="notation-note">
        <div className="notation-horizontal-line"></div>
        <div className="notation-vertical-line"></div>
        <div className={this.getNoteClasses()} id={this.getNoteId()}></div>
      </div>
    );
  }

  getNoteClasses() {
    let classes =
      "note-of-song-" +
      this.props.songId +
      " notation-note-circle " +
      this.props.note;
    return classes;
  }

  getNoteId() {
    let id = "note-" + this.props.songId + "-" + this.props.noteIndex;
    return id;
  }
}

export default NotationNote;
