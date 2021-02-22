import React, { Component } from "react";
import SongCard from "./songCard";
import { SongsData } from "../songsData";

class SongList extends Component {
  state = {};

  render() {
    return (
      <div>
        {SongsData.map((song) => (
          <SongCard key={song.id} songName={song.songName} song={song.song} />
        ))}
      </div>
    );
  }
}

export default SongList;
