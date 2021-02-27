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
import caAudio from "../sounds/ca.mp3";
import gsap from "gsap";

var uniqid = require("uniqid");
const gun = new UIfx(gunAudio),
  dun = new UIfx(dunAudio),
  go = new UIfx(goAudio),
  d0 = new UIfx(doAudio),
  pa = new UIfx(paAudio),
  ta = new UIfx(taAudio),
  ca = new UIfx(caAudio);

class App extends Component {
  state = {
    SongsData: SongsData,
    playing: false,
    step: 0,
    bpm: 120.0,
    step: 0,
  };

  handlePlayPause = (songId) => {
    clearInterval(this.interval);
    let step = 0;

    if (this.state.playing && this.state.songPlaying == songId) {
      this.setState(() => ({
        playing: false,
      }));
      return;
    }

    this.setState(() => ({
      playing: true,
      songPlaying: songId,
      step: 0,
    }));

    const notes = this.state.SongsData[songId].song.split(" ");
    let songString = "";
    this.state.SongsData[songId].song2.forEach(
      (element) => (songString += element + " ")
    );

    this.interval = setInterval(() => {
      this.animateNote(this.state.songPlaying, step);
      this.playNoteSound(notes[step]);
      step = step < songString.split(" ").length - 2 ? step + 1 : 0;
    }, (60 * 1000) / this.state.bpm / 2);
  };

  render() {
    return (
      <div className={"songList"}>
        {SongsData.map((song, index) => (
          <SongCard
            key={uniqid()}
            songId={index}
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

  animateNote(songPlaying, step) {
    this.state.animatedNoteId = "note-" + songPlaying + "-" + step;
    let animatedNoteIdHashtag = "#" + this.state.animatedNoteId;

    var tl = gsap.timeline();
    tl.to(animatedNoteIdHashtag, {
      scale: 1.5,
      duration: 0.05,
      // ease: "power2.out",
    });
    tl.to(animatedNoteIdHashtag, {
      scale: 1,
      duration: 0.2,
      // ease: "power2.in",
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
      case "Ca":
        ca.play();
        break;
      default:
        break;
    }
  }
}

export default App;
