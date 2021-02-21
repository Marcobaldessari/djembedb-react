import React, { Component } from "react";
import SongCard from "./songCard";

class SongList extends Component {
  state = {
    songs: [
      { id: 1, songName: "Abondan", song: "DDBGTPDGDGD" },
      { id: 2, songName: "Baga Giné", song: "DDBGTPDGDGD" },
      { id: 3, songName: "Bala Kulandyan", song: "DDBGTPDGDGD" },
      { id: 4, songName: "Balané", song: "DDBGTPDGDGD" },
      { id: 5, songName: "Bandon Djeli", song: "DDBGTPDGDGD" },
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
