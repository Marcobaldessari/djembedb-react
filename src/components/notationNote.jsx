import React, { Component } from "react";

class NotationNote extends React.PureComponent {
  render() {
    // let swingOffset = this.getSwingOffset();
    return (
      <div className="notation-note">
        <div className="notation-horizontal-line"></div>
        <div
          className="notation-vertical-line"
          // style={this.getSwingOffset()}
        ></div>
        <div
          // style={{ transform: ` translateX(${swingOffset}%)` }}
          className={this.getNoteClasses()}
          id={this.getNoteId()}
        ></div>
      </div>
    );
  }

  getNoteClasses() {
    let classes = "notation-note-circle " + this.props.note;
    return classes;
  }

  getNoteId() {
    let id = "note-" + this.props.songId + "-" + this.props.noteIndex;
    return id;
  }

  getSwingOffset() {
    if (this.props.noteIndex & 1) {
      // ODD
      // var style = -this.props.swing;
      // return style;
    } else {
      // EVEN
      var style = this.props.swing * 2;
      return style;
    }
  }
}

export default NotationNote;
