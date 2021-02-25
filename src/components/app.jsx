import React, { Component, Fragment } from "react";
import { SongsData } from "../songsData";
import SongCard from "./songCard";
import UIfx from "uifx";
import gunAudio from "../sounds/gun.mp3";
import dunAudio from "../sounds/dun.mp3";
import goAudio from "../sounds/go.mp3";
import doAudio from "../sounds/do.mp3";
import paAudio from "../sounds/pa.mp3";
import taAudio from "../sounds/ta.mp3";

var uniqid = require("uniqid");
const gun = new UIfx(gunAudio);
const dun = new UIfx(dunAudio);
const go = new UIfx(goAudio);
const d0 = new UIfx(doAudio);
const pa = new UIfx(paAudio);
const ta = new UIfx(taAudio);

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

    const notes = this.state.SongsData[songId].song.split(" ");
    let song2 = "";
    this.state.SongsData[songId].song2.forEach(
      (element) => (song2 += " " + element)
    );
    console.log(song2);

    this.interval = setInterval(() => {
      this.setState(
        (state) => ({
          step:
            state.step < SongsData[songId].song.split(" ").length - 1
              ? state.step + 1
              : 0,
        }),
        () => {
          switch (notes[this.state.step]) {
            case "Gun":
              gun.play();
              break;
            case "Dun":
              dun.play();
              break;
            case "go":
              go.play();
              break;
            case "do":
              d0.play();
              break;
            case "Pa":
              pa.play();
              break;
            case "Ta":
              ta.play();
              break;
            default:
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
            song2={song.song2}
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
