import React, { useContext, useEffect } from "react";
import { MyContext } from "./context/searchcontext";

export default function PlayerSongDetails() {
  const { selectedSong } = useContext(MyContext);
  useEffect(() => {
    console.log(selectedSong);
  }, [selectedSong]);
  return (
    <div id="songdetails">
      <div id="songtitle">{selectedSong.title}</div>
      <div id="songartist">{selectedSong.artist}</div>
    </div>
  );
}
