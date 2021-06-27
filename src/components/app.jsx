import React, { Component, Fragment, useState, useRef, useEffect } from "react";
import { SongsData } from "../songsData";
import SongCard from "./songCard";
import Topbar from "./topbar";
import Button from "@material-ui/core/Button";
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
import ReactGA from "react-ga";
ReactGA.initialize("UA-30988885-14");
ReactGA.pageview(window.location.pathname + window.location.search);

var volume = 0.7;
const howlerGun = new Howl({ src: [gunAudio], volume: volume });
const howlerDun = new Howl({ src: [dunAudio], volume: volume });
const howlerGo = new Howl({ src: [goAudio], volume: volume });
const howlerGos = new Howl({ src: [gosAudio], volume: volume / 4 });
const howlerDo = new Howl({ src: [doAudio], volume: volume });
const howlerDos = new Howl({ src: [dosAudio], volume: volume / 4 });
const howlerPa = new Howl({ src: [paAudio], volume: volume });
const howlerTa = new Howl({ src: [taAudio], volume: volume });
const howlerCa = new Howl({ src: [caAudio], volume: volume });

var uniqid = require("uniqid");
var bpm = 90;
var step;
var notes;

class App extends React.PureComponent {
  state = {
    SongsData: SongsData,
    playing: false,
    step: 0,
    songPlaying: 999,
  };

  componentDidMount() {
    window.addEventListener("load", this.handleWindowLoad);
    document.addEventListener("keydown", this._handleKeyDown);
  }

  handleWindowLoad = () => {
    this.checkIfSystemDarkTheme();
    setTimeout(() => {
      this.animateInTopBar();
      this.animateInSongCards();
    }, 200);
  };

  handleTempoChange = (e, t) => {
    bpm = t;
    clearInterval(this.interval);
    if (this.state.playing) {
      this.startLoop(step, notes);
    }
  };

  handleVolumeChange = (e, v) => {
    volume = v / 100;
    Howler.volume(volume);
  };

  _handleKeyDown = (e) => {
    // console.log("keypressed: " + e.key);
    if (e.key === "d") {
      alert("Debug mode enabled");
      document.body.classList.add("debug");
    }

    // if (e.keyCode == 32) {
    //   e.preventDefault();
    //   // alert("Paused mode enabled");
    //   clearInterval(this.interval);
    //   if (this.state.playing) {
    //     this.setState(() => ({
    //       playing: false,
    //       // songPlaying: songId,
    //     }));
    //   } else {
    //     this.setState(() => ({
    //       playing: true,
    //     }));
    //     this.startLoop(step, notes);
    //   }
    // }
  };

  handlePlayPause = (e, songId) => {
    //stop the music and reset the step
    clearInterval(this.interval);
    step = 0;

    if (this.state.playing && this.state.songPlaying == songId) {
      this.setState(() => ({
        playing: false,
        songPlaying: 9999,
      }));
      return;
    }

    // get the song data and play
    let songString = "";
    this.state.SongsData[songId].song.forEach(
      (element) => (songString += element + " ")
    );
    notes = songString.split(" ");
    this.startLoop(step, notes);

    // set the states
    this.setState(() => ({
      playing: true,
      songPlaying: songId,
    }));
  };

  checkIfSystemDarkTheme() {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.body.classList.toggle("dark-theme");
    }
  }

  animateInSongCards() {
    const allSongCards = document.getElementsByClassName("song-card");
    Array.prototype.forEach.call(allSongCards, function (e, index) {
      if (index < 5) {
        var delay = 0.15 * (index + 1);
      } else {
        var delay = 0.15 * ((index + 1) / 2) + 0.5;
      }
      gsap.fromTo(
        e,
        { y: 40, opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          y: 0,
          delay: delay,
          ease: "power2.out",
        }
      );
    });

    // ---------------  AnimateIn individual notes  ---------------
    // let allNotes = document.getElementsByClassName("notation-note-circle");
    // Array.prototype.forEach.call(allNotes, function (e, index) {
    //   var tl = gsap.timeline();
    //   tl.fromTo(
    //     e,
    //     {
    //       scale: 0,
    //     },
    //     {
    //       scale: 2,
    //       opacity: 1,
    //       duration: 0.2,
    //       delay: 1 + 0.02 * (index + 1),
    //       ease: "power2.out",
    //     }
    //   );
    //   tl.to(e, {
    //     scale: 1,
    //     duration: 0.2,
    //   });
    // });

    document.querySelector(".song-list").classList.remove("preload");
  }

  animateInSongCardsTimeCurve(inbdex) {}

  animateInTopBar() {
    const topbar = document.querySelector(".topbar");
    gsap.fromTo(
      topbar,
      { y: -40, opacity: 0 },
      {
        opacity: 1,
        duration: 0.5,
        y: 0,
        ease: "power2.out",
      }
    );
    topbar.classList.remove("preload");
  }

  startLoop(s, notes) {
    this.interval = setInterval(() => {
      this.animateNote(this.state.songPlaying, step);
      this.playNoteSound(notes[step]);
      step = step < notes.length - 2 ? step + 1 : 0;
    }, (60 * 1000) / bpm / 4);
    return step;
  }

  animateNote(songPlaying, step) {
    let animatedNoteId = "note-" + songPlaying + "-" + step;
    let animatedNoteIdHashtag = "#" + animatedNoteId;

    var tl = gsap.timeline();
    tl.to(animatedNoteIdHashtag, {
      scale: 1.8,
      duration: 0.05,
    });
    tl.to(animatedNoteIdHashtag, {
      scale: 1,
      duration: 0.2,
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

  render() {
    return (
      <React.Fragment>
        <Topbar
          OnTempoChange={this.handleTempoChange}
          defaultTempo={bpm}
          OnVolumeChange={this.handleVolumeChange}
          defaultVolume={volume * 100}
        ></Topbar>
        <div className="container">
          <div className={"song-list preload"}>
            {SongsData.map((song, index) => (
              <SongCard
                key={index}
                songId={index}
                songName={song.songName}
                song={song.song}
                timeSignature={song.timeSignature}
                OnPlayPause={this.handlePlayPause}
                isPlaying={this.isPlaying(index)}
              />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }

  isPlaying(songId) {
    return this.state.songPlaying == songId ? true : false;
  }
}

export default App;
