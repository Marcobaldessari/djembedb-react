import React, { Component } from "react";
import ButtonPlaySmall from "./buttonPlaySmall";
import NotationFrame from "./notationFrame";

class SongCard extends Component {
  state = {
    songName: this.props.songName,
    song: this.props.song,
    value: this.props.value,
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  playPause = () => {};

  render() {
    return (
      <div className="song-card">
        <h2 className="song-name">{this.state.songName}</h2>
        <ButtonPlaySmall onClick={this.playPause}></ButtonPlaySmall>
        <NotationFrame></NotationFrame>
      </div>
    );
  }
}

export default SongCard;
