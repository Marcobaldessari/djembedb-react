import React, { Component, Fragment, useState, useRef, useEffect } from "react";
import { SongsData } from "../songsData";
import SongCard from "./songCard";
import Topbar from "./topbar";
import { Howl, Howler } from "howler";
import gunAudio from "../sounds/gun.mp3";
import dunAudio from "../sounds/dun.mp3";
import goAudio from "../sounds/go.mp3";
import gosAudio from "../sounds/gos.mp3";
import doAudio from "../sounds/do.mp3";
import dosAudio from "../sounds/dos.mp3";
import paAudio from "../sounds/pa.mp3";
import taAudio from "../sounds/ta.mp3";
import caAudio from "../sounds/ca.mp3";
import gsap from "gsap";

const howlerGun = new Howl({ src: [gunAudio] });
const howlerDun = new Howl({ src: [dunAudio] });
const howlerGo = new Howl({ src: [goAudio] });
const howlerGos = new Howl({ src: [gosAudio] });
const howlerDo = new Howl({ src: [doAudio] });
const howlerDos = new Howl({ src: [dosAudio] });
const howlerPa = new Howl({ src: [paAudio] });
const howlerTa = new Howl({ src: [taAudio] });
const howlerCa = new Howl({ src: [caAudio] });

var uniqid = require("uniqid");

class App extends Component {
  state = {
    SongsData: SongsData,
    playing: false,
    bpm: 160.0,
    step: 0,
  };

  handlePlayPause = (e, songId) => {
    clearInterval(this.interval);
    // clearTimeout(this.buffer);
    let step = 0;

    // if player is already playing stop it and return
    if (this.state.playing && this.state.songPlaying == songId) {
      this.setState(() => ({
        playing: false,
      }));
      return;
    }

    this.setState(() => ({
      playing: true,
      songPlaying: songId,
    }));

    let songString = "";
    this.state.SongsData[songId].song.forEach(
      (element) => (songString += element + " ")
    );
    let notes = songString.split(" ");

    // this.buffer = setTimeout(() => {
    this.startLoop(step, notes);
    // }, 1);
  };

  startLoop(step, notes) {
    this.interval = setInterval(() => {
      this.animateNote(this.state.songPlaying, step);
      this.playNoteSound(notes[step]);
      step = step < notes.length - 2 ? step + 1 : 0;
    }, (60 * 1000) / this.state.bpm / 2);
    return step;
  }

  render() {
    return (
      <React.Fragment>
        <Topbar></Topbar>
        {/* <Logo></Logo> */}
        <div className="container">
          <div className={"song-list"}>
            {SongsData.map((song, index) => (
              <SongCard
                key={uniqid()}
                songId={index}
                songName={song.songName}
                song={song.song}
                timeSignature={song.timeSignature}
                OnPlayPause={this.handlePlayPause}
                songPlaying={this.state.songPlaying}
                playing={this.state.playing}
              />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }

  animateNote(songPlaying, step) {
    let animatedNoteId = "note-" + songPlaying + "-" + step;
    let animatedNoteIdHashtag = "#" + animatedNoteId;

    var tl = gsap.timeline();
    tl.to(animatedNoteIdHashtag, {
      scale: 1.8,
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
        howlerGun.play();
        break;
      case "Dun":
        howlerDun.play();
        break;
      case "go":
        howlerGo.play();
        break;
      case "do":
        howlerDo.play();
        break;
      case "gos":
        howlerGos.play();
        break;
      case "dos":
        howlerDos.play();
        break;
      case "Pa":
        howlerPa.play();
        break;
      case "Ta":
        howlerTa.play();
        break;
      case "Ca":
        howlerCa.play();
        break;
      default:
        break;
    }
  }
}

export default App;
