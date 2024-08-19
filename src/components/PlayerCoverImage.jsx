import React, { useContext } from "react";
import { MyContext } from "./context/searchcontext";
import "./style/PlayerCoverImage.css";

export default function PlayerCoverImage() {
  const { selectedSong } = useContext(MyContext);
  return (
    <img
      id="playercoverimage"
      src={`${selectedSong.albumArt}`}
      alt="album art"
    />
  );
}
