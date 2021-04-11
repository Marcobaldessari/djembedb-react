import React, { Component } from "react";
import NotationNote from "./notationNote";
import gsap from "gsap";

var uniqid = require("uniqid");
var clickHasBeenAnimated = false;

class SongCard extends Component {
  state = {
    playing: false,
    // songPlaying: this.props.playing,
  };
  constructor() {
    super();
    this.notationFrame = null;
  }

  render() {
    return (
      <div className="song-card" id={this.getSongCardId()}>
        <h2 className="song-name">{this.props.songName}</h2>
        <div
          className={this.getNotationFrameClass()}
          ref={(e) => (this.notationFrame = e)}
          onClick={(e) => {
            this.props.OnPlayPause(e, this.props.songId);
          }}
        >
          {this.props.song.map((measure, indexMeasure) => (
            <div
              className={this.getMeasureClass()}
              key={uniqid()}
              id={this.getMeasureId(indexMeasure)}
            >
              {measure.split(" ").map((n, indexNote) => (
                <span key={uniqid()} className="notation-number">
                  {indexNote + 1}
                </span>
              ))}

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

  componentDidUpdate() {
    // if (!clickHasBeenAnimated) {
    // clickHasBeenAnimated = true;
    this.animateNotationFrame();
    console.log(this.notationFrame);
    // }
  }

  animateNotationFrame(e) {
    var tl = gsap.timeline();
    console.log(this.notationFrame);
    tl.to(this.notationFrame, {
      scale: 2,
      duration: 2,
      backgroundColor: "#eeeeee",
    });
    tl.to(this.notationFrame, {
      x: 1,
      duration: 0.2,
    });
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
      case "7/4":
        classes += "seven-four";
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
      case "7/4":
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

  getSongCardId() {
    let id = "songCard-" + this.props.songId;
    return id;
  }

  getNoteIndex(indexNote, indexMeasure, measure) {
    return indexNote + indexMeasure * measure.split(" ").length;
  }
}

export default SongCard;
