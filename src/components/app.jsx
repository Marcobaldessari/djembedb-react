import React, { Component, Fragment, useState, useRef, useEffect } from "react";
import { SongsData } from "../songsData";
import SongCard from "./songCard";
import Topbar from "./topbar";
import Button from "@material-ui/core/Button";
import { Howl, Howler } from "howler";
import { hotjar } from "react-hotjar";
import FullStory from "react-fullstory";

//import Djembe Sounds
import gunAudioDjembe from "../sounds/djembe/gun.mp3";
import dunAudioDjembe from "../sounds/djembe/dun.mp3";
import goAudioDjembe from "../sounds/djembe/go.mp3";
import gosAudioDjembe from "../sounds/djembe/gos.mp3";
import doAudioDjembe from "../sounds/djembe/do.mp3";
import dosAudioDjembe from "../sounds/djembe/dos.mp3";
import paAudioDjembe from "../sounds/djembe/pa.mp3";
import taAudioDjembe from "../sounds/djembe/ta.mp3";
import caAudioDjembe from "../sounds/djembe/ca.mp3";

//import Cajon Sounds
import gunAudioCajon from "../sounds/cajon/gun.mp3";
import dunAudioCajon from "../sounds/cajon/dun.mp3";
import gosAudioCajon from "../sounds/cajon/gos.mp3";
import dosAudioCajon from "../sounds/cajon/dos.mp3";
import paAudioCajon from "../sounds/cajon/pa.mp3";
import taAudioCajon from "../sounds/cajon/ta.mp3";

import gsap from "gsap";
import ReactGA from "react-ga";
ReactGA.initialize("UA-30988885-14");
ReactGA.pageview(window.location.pathname + window.location.search);

var volume = 1;
const howlerGunDjembe = new Howl({ src: [gunAudioDjembe], volume: volume });
const howlerDunDjembe = new Howl({ src: [dunAudioDjembe], volume: volume });
const howlerGoDjembe = new Howl({ src: [goAudioDjembe], volume: volume });
const howlerGosDjembe = new Howl({ src: [gosAudioDjembe], volume: volume / 4 });
const howlerDoDjembe = new Howl({ src: [doAudioDjembe], volume: volume });
const howlerDosDjembe = new Howl({ src: [dosAudioDjembe], volume: volume / 4 });
const howlerPaDjembe = new Howl({ src: [paAudioDjembe], volume: volume });
const howlerTaDjembe = new Howl({ src: [taAudioDjembe], volume: volume });
const howlerCaDjembe = new Howl({ src: [caAudioDjembe], volume: volume });

const howlerGunCajon = new Howl({ src: [gunAudioCajon], volume: volume });
const howlerDunCajon = new Howl({ src: [dunAudioCajon], volume: volume });
const howlerGosCajon = new Howl({ src: [gosAudioCajon], volume: volume / 8 });
const howlerDosCajon = new Howl({ src: [dosAudioCajon], volume: volume / 12 });
const howlerPaCajon = new Howl({ src: [paAudioCajon], volume: volume });
const howlerTaCajon = new Howl({ src: [taAudioCajon], volume: volume });

var uniqid = require("uniqid");
var bpm = 90;
var swing = 0;
var step;
var notes;

hotjar.initialize(2655002, 6);
const ORG_ID = "GR09Q";

class App extends React.PureComponent {
  state = {
    SongsData: SongsData,
    playing: false,
    step: 0,
    songPlaying: 999,
    instrument: "djembe",
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

  handleSwingChange = (e, s) => {
    swing = s;
    clearInterval(this.interval);
    if (this.state.playing) {
      this.startLoop(step, notes);
    }
  };

  handleVolumeChange = (e, v) => {
    volume = v / 100;
    Howler.volume(volume);
  };

  handleInstrumentChange = () => {
    if (this.state.instrument == "cajon") {
      this.setState(() => ({
        instrument: "djembe",
      }));
    } else {
      this.setState(() => ({
        instrument: "cajon",
      }));
    }
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
        switch (this.state.instrument) {
          case "djembe":
            howlerGunDjembe.play();
            break;
          case "cajon":
            howlerGunCajon.play();
            break;
        }
        break;

      case "Dun":
        switch (this.state.instrument) {
          case "djembe":
            howlerDunDjembe.play();
            break;
          case "cajon":
            howlerDunCajon.play();
            break;
        }
        break;

      case "go":
        switch (this.state.instrument) {
          case "djembe":
            howlerGoDjembe.play();
            break;
          case "cajon":
            howlerPaCajon.play();
            break;
        }
        break;

      case "do":
        switch (this.state.instrument) {
          case "djembe":
            howlerDoDjembe.play();
            break;
          case "cajon":
            howlerTaCajon.play();
            break;
        }
        break;

      case "gos":
        switch (this.state.instrument) {
          case "djembe":
            howlerGosDjembe.play();
            break;
          case "cajon":
            howlerGosCajon.play();
            break;
        }
        break;

      case "dos":
        switch (this.state.instrument) {
          case "djembe":
            howlerDosDjembe.play();
            break;
          case "cajon":
            howlerDosCajon.play();
            break;
        }
        break;

      case "Pa":
        switch (this.state.instrument) {
          case "djembe":
            howlerPaDjembe.play();
            break;
          case "cajon":
            howlerPaCajon.play();
            break;
        }
        break;

      case "Ta":
        switch (this.state.instrument) {
          case "djembe":
            howlerTaDjembe.play();
            break;
          case "cajon":
            howlerTaCajon.play();
            break;
        }
        break;

      case "Ca":
        switch (this.state.instrument) {
          case "djembe":
            howlerCaDjembe.play();
            break;
          case "cajon":
            howlerPaCajon.play();
            break;
        }
        break;

      default:
        break;
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="app">
          <FullStory org={ORG_ID} />
        </div>
        <Topbar
          OnSwingChange={this.handleSwingChange}
          defaultSwing={0}
          OnTempoChange={this.handleTempoChange}
          defaultTempo={bpm}
          OnVolumeChange={this.handleVolumeChange}
          defaultVolume={volume * 100}
          OnInstrumentChange={this.handleInstrumentChange}
          instrument={this.state.instrument}
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
                suggestedBpm={song.bpm}
                feel={song.feel}
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
