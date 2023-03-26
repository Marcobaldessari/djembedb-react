import { Howl, Howler } from "howler";
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

export const playNoteSound = (note, instrument) => {
  switch (note) {
    case "Gun":
      switch (instrument) {
        case "djembe":
          howlerGunDjembe.play();
          break;
        case "cajon":
          howlerGunCajon.play();
          break;
      }
      break;

    case "Dun":
      switch (instrument) {
        case "djembe":
          howlerDunDjembe.play();
          break;
        case "cajon":
          howlerDunCajon.play();
          break;
      }
      break;

    case "go":
      switch (instrument) {
        case "djembe":
          howlerGoDjembe.play();
          break;
        case "cajon":
          howlerPaCajon.play();
          break;
      }
      break;

    case "do":
      switch (instrument) {
        case "djembe":
          howlerDoDjembe.play();
          break;
        case "cajon":
          howlerTaCajon.play();
          break;
      }
      break;

    case "gos":
      switch (instrument) {
        case "djembe":
          howlerGosDjembe.play();
          break;
        case "cajon":
          howlerGosCajon.play();
          break;
      }
      break;

    case "dos":
      switch (instrument) {
        case "djembe":
          howlerDosDjembe.play();
          break;
        case "cajon":
          howlerDosCajon.play();
          break;
      }
      break;

    case "Pa":
      switch (instrument) {
        case "djembe":
          howlerPaDjembe.play();
          break;
        case "cajon":
          howlerPaCajon.play();
          break;
      }
      break;

    case "Ta":
      switch (instrument) {
        case "djembe":
          howlerTaDjembe.play();
          break;
        case "cajon":
          howlerTaCajon.play();
          break;
      }
      break;

    case "Ca":
      switch (instrument) {
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
};
