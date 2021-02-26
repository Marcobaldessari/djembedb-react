import React, { Component } from "react";
import NotationNote from "./notationNote";
var uniqid = require("uniqid");

class SongCard extends Component {
  state = {
    songName: this.props.songName,
    song: this.props.song,
    notes: this.props.song.split(" "),
  };

  render() {
    return (
      <div className="song-card">
        <h2 className="song-name">{this.state.songName}</h2>
        {/* <button
          className={"btn btn-play paused"}
          onClick={() => {
            this.props.OnPlayPause(this.props.songId);
          }}
        >
          PLAY
        </button> */}
        <div
          className={this.getNotationFrameClasses()}
          onClick={() => {
            this.props.OnPlayPause(this.props.songId);
          }}
        >
          {this.state.notes.map((i, index) => (
            <NotationNote
              key={uniqid()}
              note={i}
              noteIndex={index}
              songId={this.props.songId}
            />
          ))}
        </div>
      </div>
    );
  }
  getNotationFrameClasses = () => {
    let classes = "notation-frame";
    classes +=
      this.props.playing && this.props.songPlaying === this.props.songId
        ? " active"
        : "";
    return classes;
  };
}

export default SongCard;
