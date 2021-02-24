import React, { Component } from "react";
import ButtonPlaySmall from "./buttonPlaySmall";
import NotationNote from "./notationNote";
var uniqid = require("uniqid");

class SongCard extends Component {
  state = {
    step: this.props.step,
    songName: this.props.songName,
    song: this.props.song,
    notes: this.props.song.split(" "),
  };

  render() {
    return (
      <div className="song-card">
        <h2 className="song-name">{this.state.songName}</h2>
        <button
          className={"btn btn-play paused"}
          onClick={this.props.OnPlayPause}
        >
          PLAY
        </button>
        {/* <ButtonPlaySmall onClick={this.props.OnPlayPause}></ButtonPlaySmall> */}
        <div className="notation-frame">
          {this.state.notes.map((i, index) => (
            <NotationNote
              step={this.props.step}
              key={uniqid()}
              note={i}
              noteIndex={index}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SongCard;
