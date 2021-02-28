import React, { Component } from "react";
import UIfx from "uifx";
import gunAudio from "../sounds/gun.mp3";
import dunAudio from "../sounds/dun.mp3";
import goAudio from "../sounds/go.mp3";
import doAudio from "../sounds/do.mp3";
import paAudio from "../sounds/pa.mp3";
import taAudio from "../sounds/ta.mp3";
import caAudio from "../sounds/ca.mp3";
import gsap from "gsap";

const gun = new UIfx(gunAudio),
  dun = new UIfx(dunAudio),
  go = new UIfx(goAudio),
  d0 = new UIfx(doAudio),
  pa = new UIfx(paAudio),
  ta = new UIfx(taAudio),
  ca = new UIfx(caAudio);

class Logo extends Component {
  state = {
    logoBpm: 220,
    interval: 0.136,
    songString: "Dun Ca Dun Gun",
  };

  render() {
    return (
      <div
        className="logo"
        onClick={() => {
          this.playLogoMusic();
        }}
      >
        <div className="logomark">
          <div className="logomark-note Dun" id="note-logo-1"></div>
          <div className="logomark-note Ca" id="note-logo-2"></div>
          <div className="logomark-note Dun" id="note-logo-3"></div>
          <div className="logomark-note Gun" id="note-logo-4"></div>
        </div>
        <img src={require("../vectors/test.png")} alt="" />
        <div className="logotype">
          {/* <img src="/src/vectors/logotype.svg" /> */}
          <svg
            width="361"
            height="60"
            viewBox="0 0 361 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M38.3362 45.048V15.48C38.3362 10.608 37.7482 8.50804 36.4042 6.40805C33.9682 2.54405 30.1042 1.53605 28.5082 1.20004C26.0722 0.696046 22.2922 0.696045 21.8722 0.696045H0.200195V60H22.4602C27.0802 60 32.3722 59.748 35.6482 55.8C38.1682 52.776 38.3362 48.7441 38.3362 45.048ZM23.8882 44.712C23.8882 46.728 23.7202 48.744 21.2842 49.416C20.4442 49.668 20.1922 49.752 18.6802 49.752H14.1442V10.944H18.5122C19.2682 10.944 22.8802 10.692 23.7202 13.968C23.9722 14.808 23.8882 16.236 23.8882 16.32V44.712Z"
              fill="black"
            />
            <path
              d="M66.0555 44.46V0.696045H51.6915V45.132C51.6915 48.24 50.9355 49.752 47.6595 49.752H42.8715V60H51.4395C54.7995 60 57.9075 60 60.8475 58.32C64.5435 56.22 65.3835 52.944 65.6355 51.516C66.1395 49.08 66.0555 44.544 66.0555 44.46Z"
              fill="black"
            />
            <path
              d="M104.444 60V49.5H88.1482V35.22H103.52V24.804H88.1482V11.112H104.444V0.696045H73.7842V60H104.444Z"
              fill="black"
            />
            <path
              d="M166.732 60V0.696045H147.328L138.508 44.208L129.688 0.696045H110.536V60H123.052V17.328L132.208 60H144.808L153.964 17.328V60H166.732Z"
              fill="black"
            />
            <path
              d="M211.965 43.788C211.965 38.076 211.881 34.8 209.613 32.112C208.101 30.348 206.589 29.592 203.229 28.584C205.077 27.912 207.261 27.24 209.025 25.056C211.041 22.704 211.209 19.512 211.209 14.304C211.209 11.784 211.965 3.55204 201.801 1.20004C199.953 0.780045 198.357 0.696045 194.745 0.696045H175.257V60H197.265C205.329 60 211.965 58.404 211.965 43.788ZM198.525 17.412C198.525 21.864 198.105 23.88 194.577 23.88H188.697V11.196H194.157C197.601 11.196 198.525 12.708 198.525 17.412ZM198.777 42.108C198.777 47.316 198.357 49.332 194.241 49.332H188.697V34.296H194.241C198.609 34.296 198.777 36.648 198.777 42.108Z"
              fill="black"
            />
            <path
              d="M249.722 60V49.5H233.426V35.22H248.798V24.804H233.426V11.112H249.722V0.696045H219.062V60H249.722Z"
              fill="black"
            />
            <path
              d="M316.586 45.048V15.48C316.586 10.608 315.998 8.50804 314.654 6.40805C312.218 2.54405 308.354 1.53605 306.758 1.20004C304.322 0.696046 300.542 0.696045 300.122 0.696045H278.45V60H300.71C305.33 60 310.622 59.748 313.898 55.8C316.418 52.776 316.586 48.7441 316.586 45.048ZM302.138 44.712C302.138 46.728 301.97 48.744 299.534 49.416C298.694 49.668 298.442 49.752 296.93 49.752H292.394V10.944H296.762C297.518 10.944 301.13 10.692 301.97 13.968C302.222 14.808 302.138 16.236 302.138 16.32V44.712Z"
              fill="black"
            />
            <path
              d="M360.77 43.788C360.77 38.076 360.686 34.8 358.418 32.112C356.906 30.348 355.394 29.592 352.034 28.584C353.882 27.912 356.066 27.24 357.83 25.056C359.846 22.704 360.014 19.512 360.014 14.304C360.014 11.784 360.77 3.55204 350.606 1.20004C348.758 0.780045 347.162 0.696045 343.55 0.696045H324.062V60H346.07C354.134 60 360.77 58.404 360.77 43.788ZM347.33 17.412C347.33 21.864 346.91 23.88 343.382 23.88H337.502V11.196H342.962C346.406 11.196 347.33 12.708 347.33 17.412ZM347.582 42.108C347.582 47.316 347.162 49.332 343.046 49.332H337.502V34.296H343.046C347.414 34.296 347.582 36.648 347.582 42.108Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    );
  }

  playLogoMusic = () => {
    clearInterval(this.interval);
    let step = 0;
    const notesArray = this.state.songString.split(" ");

    this.animateNote(this.state.songPlaying, step);
    this.interval = setInterval(() => {
      this.playNoteSound(notesArray[step]);
      if (step < notesArray.length - 1) {
        step += 1;
      } else {
        step = 0;
        clearInterval(this.interval);
      }
    }, (60 * 1000) / this.state.logoBpm / 2);
  };

  animateNote(songPlaying, step) {
    var note1Animation = gsap.timeline();
    var note2Animation = gsap.timeline();
    var note3Animation = gsap.timeline();
    var note4Animation = gsap.timeline();

    note1Animation.to("#note-logo-1", {
      scale: 1.5,
      duration: 0.05,
    });
    note1Animation.to("#note-logo-1", {
      scale: 1,
      duration: 0.2,
    });

    note2Animation.to("#note-logo-2", {
      scale: 1.5,
      duration: 0.05,
      delay: this.state.interval,
    });
    note2Animation.to("#note-logo-2", {
      scale: 1,
      duration: 0.2,
    });
    note3Animation.to("#note-logo-3", {
      scale: 1.5,
      duration: 0.05,
      delay: this.state.interval * 2,
    });
    note3Animation.to("#note-logo-3", {
      scale: 1,
      duration: 0.2,
    });
    note4Animation.to("#note-logo-4", {
      scale: 1.5,
      duration: 0.05,
      delay: this.state.interval * 3,
    });
    note4Animation.to("#note-logo-4", {
      scale: 1,
      duration: 0.2,
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

export default Logo;
