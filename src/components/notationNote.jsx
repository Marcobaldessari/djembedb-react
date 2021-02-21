import React, { Component } from "react";

<div></div>;
class NotationNote extends Component {
  state = {
    note: this.props.note,
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
    return classes;
  }
}

export default NotationNote;
