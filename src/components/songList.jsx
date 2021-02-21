import React, { Component } from "react";
import SongCard from "./songCard";

class SongList extends Component {
  state = {
    songs: [
      {
        id: 1,
        songName: "Abondan",
        song: "Dun Gun do go Ta Pa Dun Gun do go Ta Pa Dun Gun do go",
      },
      {
        id: 2,
        songName: "Baga Giné",
        song: "Dun Gun do go Ta Pa Dun Gun do go Ta Pa Dun Gun do go",
      },
      {
        id: 3,
        songName: "Bala Kulandyan",
        song: "Dun Gun do go Ta Pa Dun Gun do go Ta Pa Dun Gun do go",
      },
      {
        id: 4,
        songName: "Balané",
        song: "Dun Gun do go Ta Pa Dun Gun do go Ta Pa Dun Gun do go",
      },
      {
        id: 5,
        songName: "Bandon Djeli",
        song: "Dun Gun do go Ta Pa Dun Gun do go Ta Pa Dun Gun do go",
      },
    ],
  };

  render() {
    return (
      <div>
        {this.state.songs.map((song) => (
          <SongCard key={song.id} songName={song.songName} song={song.song} />
        ))}
      </div>
    );
  }
}

export default SongList;
