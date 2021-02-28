import React, { Component } from "react";
import NotationNote from "./notationNote";
var uniqid = require("uniqid");

class SongCard extends Component {
  state = {};

  render() {
    return (
      <div className="song-card">
        <h2 className="song-name">{this.props.songName}</h2>
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
          {this.props.song.map((measure, indexMeasure) => (
            <div
              className="measure"
              key={uniqid()}
              id={this.getMeasureId(indexMeasure)}
            >
              {measure.split(" ").map((n, indexNote) => (
                <NotationNote
                  key={uniqid()}
                  note={n}
                  noteIndex={this.getNoteIndex(
                    indexNote,
                    indexMeasure,
                    measure
                  )}
                  songId={this.props.songId}
                />
              ))}
            </div>
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

  getMeasureId(indexMeasure) {
    let id = "measure-" + this.props.songId + "-" + indexMeasure;
    return id;
  }

  getNoteIndex(indexNote, indexMeasure, measure) {
    return indexNote + indexMeasure * measure.split(" ").length;
  }
}

export default SongCard;
