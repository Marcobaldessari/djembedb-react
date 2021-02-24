import React, { Component, Fragment } from "react";
import SongCard from "./songCard";
import { SongsData } from "../songsData";
import useSound from "use-sound";
// import fxBass from "../sounds/fxBass.mp3";
// import fx-tone from '../sounds/fx-tone.mp3';
// import fx-slap from '../sounds/fx-slap.mp3';

class App extends Component {
  state = {
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

  handlePlayPause = () => {
    if (this.state.playing) {
      clearInterval(this.interval);
      this.setState(() => ({
        playing: false,
      }));
      return;
    }

    this.setState(() => ({
      playing: true,
    }));
    // const { bpm, notes, type, release, delay } = this.state;

    this.interval = setInterval(() => {
      this.setState(
        (state) => ({
          step: state.step < state.steps - 1 ? state.step + 1 : 0,
        }),
        () => {
          // console.log(this.state.step);
          const audioEl = document.getElementsByClassName("fxBass")[0];
          audioEl.play();
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
              key={song.id}
              step={this.state.step}
              songName={song.songName}
              song={song.song}
              OnPlayPause={this.handlePlayPause}
            />
          ))}
        </div>
        <audio className="fxBass">
          <source src="../../sounds/fxBass.mp3"></source>
        </audio>
        <audio className="fxTone">
          <source src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"></source>
        </audio>
        <audio className="fxSlap">
          <source src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"></source>
        </audio>
      </React.Fragment>
    );
  }
}

export default App;
