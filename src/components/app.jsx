import React, { Component, Fragment, useState, useRef, useEffect } from "react";
import { SongsData } from "../songsData";
import SongCard from "./songCard";
import UIfx from "uifx";
import gunAudio from "../sounds/gun.mp3";
import dunAudio from "../sounds/dun.mp3";
import goAudio from "../sounds/go.mp3";
import doAudio from "../sounds/do.mp3";
import paAudio from "../sounds/pa.mp3";
import taAudio from "../sounds/ta.mp3";
import gsap from "gsap";

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
    bpm: 150.0,
    step: 0,
  };

  // const [rotate, setRotate] = useState(false);

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
      step: 0,
    }));

    const notes = this.state.SongsData[songId].song.split(" ");
    let song2 = "";
    this.state.SongsData[songId].song2.forEach(
      (element) => (song2 += " " + element)
    );
    // console.log(song2);

    this.interval = setInterval(() => {
      this.setState(
        (state) => ({
          step:
            state.step < SongsData[songId].song.split(" ").length - 1
              ? state.step + 1
              : 0,
        }),
        () => {}
      );
      // this.animateNote(this.state.songPlaying, this.state.step);
      this.playNoteSound(notes[this.state.step]);
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

  componentDidUpdate() {
    this.animateNote(this.state.songPlaying, this.state.step);
  }

  animateNote(songPlaying, step) {
    this.state.animatedNoteId = "note-" + songPlaying + "-" + step;
    let animatedNoteIdHashtag = "#" + this.state.animatedNoteId;

    var tl = gsap.timeline();
    tl.to(animatedNoteIdHashtag, {
      scale: 1.5,
      duration: 0.1,
      ease: "power2.out",
    });
    tl.to(animatedNoteIdHashtag, {
      scale: 1,
      duration: 0.1,
      ease: "power2.in",
    });
  }

  playNoteSound(note) {
    switch (note) {
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
}

export default App;
