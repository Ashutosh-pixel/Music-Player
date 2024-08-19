import React, { useContext } from "react";
import { MyContext } from "./context/searchcontext";

export default function PlayerSongDetails() {
  const { selectedSong } = useContext(MyContext);
  return (
    <div id="songdetails">
      <div id="songtitle">{selectedSong.title}</div>
      <div id="songartist">{selectedSong.artist}</div>
    </div>
  );
}
