import React from "react";
import PlayerSongDetails from "./PlayerSongDetails";
import PlayerCoverImage from "./PlayerCoverImage";
import Controls from "./Controls";

export default function MusicPlayer() {
  return (
    <div id="musicplayer" className="flex">
      <PlayerSongDetails />
      <div id="coverimage">
        <PlayerCoverImage />
      </div>
      <Controls />
    </div>
  );
}
