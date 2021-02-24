import React, { Component, Fragment } from "react";
import SongCard from "./songCard";
import { SongsData } from "../songsData";
import useSound from "use-sound";
var uniqid = require("uniqid");

class App extends Component {
  state = {
    SongsData: SongsData,
    playing: false,
    step: 0,

    tempo: 60.0,
    bpm: 120.0,
    step: 0,
    steps: 16,
    currentNote: 0,
    nextNoteTime: 0.0, // when the next note is due.
    notesInQueue: [],
    lastNoteDrawn: 3,
    AudioContext: window.AudioContext || window.webkitAudioContext,
    audioCtx: new AudioContext(),
    playing: false,
  };

  // constructor(props) {
  //   super(props);
  //   this.playPause = this.playPause.bind(this);
  // }

  handlePlayPause = (songId) => {
    if (this.state.playing) {
      clearInterval(this.interval);
      this.setState(() => ({
        playing: false,
      }));
      return;
    }

    this.setState(() => ({
      playing: true,
      songPlaying: songId,
    }));
    // const { bpm, notes, type, release, delay } = this.state;

    this.interval = setInterval(() => {
      this.setState(
        (state) => ({
          step: state.step < state.steps - 1 ? state.step + 1 : 0,
        }),
        () => {
          // console.log(this.state.step);
          // if () {
          // }

          const fxBass = document.getElementsByClassName("fxBass")[0];
          const fxTone = document.getElementsByClassName("fxTone")[0];
          const fxSlap = document.getElementsByClassName("fxSlap")[0];
          switch (
            this.state.SongsData[songId].song.split(" ")[this.state.step]
          ) {
            case "x":
              break;
            case "Gun":
              fxBass.play();
              break;
            case "Dun":
              fxBass.play();
              break;
            case "go":
              fxTone.play();
              break;
            case "do":
              fxTone.play();
              break;
            case "Pa":
              fxSlap.play();
              break;
            case "Ta":
              fxSlap.play();
              break;
          }
        }
      );
    }, (60 * 1000) / this.state.bpm / 2);
  };

  render() {
    return (
      <React.Fragment>
        <div className={"songList"}>
          {SongsData.map((song) => (
            <SongCard
              key={uniqid()}
              songId={song.id}
              step={this.state.step}
              songName={song.songName}
              song={song.song}
              OnPlayPause={this.handlePlayPause}
              songPlaying={this.state.songPlaying}
            />
          ))}
        </div>

        <audio className="fxBass">
          <source src="https://raw.githubusercontent.com/Marcobaldessari/djembedb-react/master/src/sounds/fxBass.mp3"></source>
          {/* <source src="../../sounds/fxBass.mp3"></source> */}
        </audio>
        <audio className="fxTone">
          <source src="https://raw.githubusercontent.com/Marcobaldessari/djembedb-react/master/src/sounds/fxTone.mp3"></source>
        </audio>
        <audio className="fxSlap">
          <source src="https://raw.githubusercontent.com/Marcobaldessari/djembedb-react/master/src/sounds/fxSlap.mp3"></source>
        </audio>
      </React.Fragment>
    );
  }
}

export default App;
