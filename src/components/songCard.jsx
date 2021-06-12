import React, { Component } from "react";
import NotationNote from "./notationNote";
import gsap from "gsap";

var uniqid = require("uniqid");
var clickHasBeenAnimated = false;
const countingSystemAmerican = [
  "1",
  "e",
  "&",
  "a",
  "2",
  "e",
  "&",
  "a",
  "3",
  "e",
  "&",
  "a",
  "4",
  "e",
  "&",
  "a",
];
const countingSystemNumbers = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
];

class SongCard extends React.PureComponent {
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
              key={indexMeasure}
              id={this.getMeasureId(indexMeasure)}
            >
              {measure.split(" ").map((n, indexNote) => (
                <span key={indexNote} className="notation-number">
                  {this.getNotationNumber(indexNote)}
                </span>
              ))}

              {measure.split(" ").map((n, indexNote) => (
                <NotationNote
                  key={indexNote}
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
    if (this.props.isPlaying) {
      this.animateNotationFrame();
    }
  }

  animateNotationFrame(e) {
    var tl = gsap.timeline();
    // tl.to(this.notationFrame, {
    //   scale: 1.04,
    //   duration: 0.1,
    // });
    // tl.to(this.notationFrame, {
    //   scale: 1,
    //   duration: 1,
    //   ease: "elastic.out(1,0.3)",
    // });
    // console.log(this.notationFrame.style.backgroundColor);
    tl.to(this.notationFrame, {
      scale: 1.02,
      duration: 0.1,
    });
    tl.to(this.notationFrame, {
      scale: 1,
      duration: 1,
      ease: "elastic.out(1,0.3)",
    });
  }

  getNotationNumber = (index) => {
    // return countingSystemAmerican[index];
    return index + 1;
  };

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
    // switch (this.props.timeSignature) {
    //   case "2/4":
    //     classes += "two-bars";
    //     break;
    //   case "3/4":
    //     classes += "two-bars";
    //     break;
    //   case "4/4":
    //     classes += "two-bars";
    //     break;
    //   case "6/8":
    //     classes += "two-bars";
    //     break;
    //   case "9/8":
    //     classes += "two-bars";
    //     break;
    //   case "12/8":
    //     classes += "two-bars";
    //     break;
    //   case "5/4":
    //     classes += "two-bars";
    //     break;
    //   case "7/4":
    //     classes += "two-bars";
    //     break;
    //   default:
    //     classes += "two-bars";
    //     break;
    // }
    classes += this.props.isPlaying ? " active" : "";
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
