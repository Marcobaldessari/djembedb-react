import React, { Component } from "react";
import SongCard from "./songCard";

class SongList extends Component {
  state = {
    songs: [
      {
        id: 1,
        songName: "Bala Kulandyan",
        song: "Pa x x Ta Pa x go do Pa x x Ta Pa x go do",
      },
      {
        id: 2,
        songName: "Modern hip pop",
        song: "Gun do go do Pa x x do Gun x Gun x do Pa x x",
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
      {
        id: 6,
        songName: "Bala Kulandyan",
        song: "Pa x x Ta Pa x go do Pa x x Ta Pa x go do",
      },
      {
        id: 7,
        songName: "Modern hip pop",
        song: "Gun do go do Pa x x do Gun x Gun x do Pa x x",
      },
      {
        id: 8,
        songName: "Bala Kulandyan",
        song: "Dun Gun do go Ta Pa Dun Gun do go Ta Pa Dun Gun do go",
      },
      {
        id: 9,
        songName: "Balané",
        song: "Dun Gun do go Ta Pa Dun Gun do go Ta Pa Dun Gun do go",
      },
      {
        id: 10,
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
