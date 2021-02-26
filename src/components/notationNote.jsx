import React, { Component } from "react";

class NotationNote extends Component {
  state = {
    note: this.props.note,
    noteIndex: this.props.noteIndex,
  };

  render() {
    return (
      <div className="notation-note">
        <div className="notation-horizontal-line"></div>
        <div className="notation-vertical-line"></div>
        <div className={this.getNoteClasses()} id={this.getNoteId()}>
          {/* <div className={"note-animated"} id={this.getNoteId()}></div> */}
        </div>
      </div>
    );
  }

  getNoteClasses() {
    let classes = "notation-note-circle " + this.state.note;
    return classes;
  }

  getNoteId() {
    let id = "note-" + this.props.songId + "-" + this.props.noteIndex;
    return id;
  }
}

export default NotationNote;
