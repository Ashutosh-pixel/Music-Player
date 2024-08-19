import React from "react";
import PlayerSongDetails from "./PlayerSongDetails";
import PlayerCoverImage from "./PlayerCoverImage";

export default function MusicPlayer() {
  return (
    <div id="musicplayer" className="flex">
      <PlayerSongDetails />
      <div id="coverimage">
        <PlayerCoverImage />
      </div>
    </div>
  );
}
