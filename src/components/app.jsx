import React, { Component, Fragment } from "react";
import { SongsData } from "../songsData";
import SongCard from "./songCard";
import UIfx from "uifx";
import bassAudio from "../sounds/fxBass.mp3";
import toneAudio from "../sounds/fxTone.mp3";
import slapAudio from "../sounds/fxSlap.mp3";

var uniqid = require("uniqid");
const bass = new UIfx(bassAudio);
const tone = new UIfx(toneAudio);
const slap = new UIfx(slapAudio);

class App extends Component {
  state = {
    SongsData: SongsData,
    playing: false,
    step: 0,
    bpm: 120.0,
    step: 0,
  };

  handlePlayPause = (songId) => {
    if (this.state.playing && this.state.songPlaying == songId) {
      clearInterval(this.interval);
      this.setState(() => ({
        playing: false,
      }));
      return;
    }

    clearInterval(this.interval);

    this.setState(() => ({
      playing: true,
      songPlaying: songId,
      step: -1,
    }));

    const song = this.state.SongsData[songId].song.split(" ");

    this.interval = setInterval(() => {
      this.setState(
        (state) => ({
          step:
            state.step < SongsData[songId].song.split(" ").length - 1
              ? state.step + 1
              : 0,
        }),
        () => {
          switch (song[this.state.step]) {
            case "x":
              break;
            case "Gun":
              bass.play();
              break;
            case "Dun":
              bass.play();
              break;
            case "go":
              tone.play();
              break;
            case "do":
              tone.play();
              break;
            case "Pa":
              slap.play();
              break;
            case "Ta":
              slap.play();
              break;
          }
        }
      );
    }, (60 * 1000) / this.state.bpm / 2);
  };

  render() {
    return (
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
            playing={this.state.playing}
          />
        ))}
      </div>
    );
  }
}

export default App;
