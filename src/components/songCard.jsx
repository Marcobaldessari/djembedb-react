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
          className={this.getNotationFrameClass()}
          onClick={() => {
            this.props.OnPlayPause(this.props.songId);
          }}
        >
          {this.props.song.map((measure, indexMeasure) => (
            <div
              className={this.getMeasureClass()}
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
  getMeasureClass = () => {
    let classes = "measure ";
    switch (this.props.timeSignature) {
      case "2/4":
        classes += "two-four";
        break;
      case "3/4":
        classes += "three-four";
        break;
      case "4/4":
        classes += "four-four";
        break;
      case "6/8":
        classes += "six-eight";
        break;
      case "9/8":
        classes += "nine-eight";
        break;
      case "12/8":
        classes += "twelve-eight";
        break;
      case "5/4":
        classes += "five-four";
        break;
      default:
    }
    return classes;
  };

  getNotationFrameClass = () => {
    let classes = "notation-frame ";
    switch (this.props.timeSignature) {
      case "2/4":
        classes += "two-bars";
        break;
      case "3/4":
        classes += "two-bars";
        break;
      case "4/4":
        classes += "two-bars";
        break;
      case "6/8":
        classes += "two-bars";
        break;
      case "9/8":
        classes += "two-bars";
        break;
      case "12/8":
        classes += "two-bars";
        break;
      case "5/4":
        classes += "two-bars";
        break;
      default:
        classes += "two-bars";
        break;
    }
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
