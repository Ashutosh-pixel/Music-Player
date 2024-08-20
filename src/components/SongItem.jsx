import React, { useContext, useEffect } from "react";
import "./style/SongItem.css";
import { MyContext } from "./context/searchcontext";

const SongItem = ({
  albumArt,
  title,
  artist,
  duration,
  accent,
  songindex,
  songurl,
  songid,
}) => {
  const { selectedColor, setSelectedColor } = useContext(MyContext);
  const { selectedSong, setSelectedSong } = useContext(MyContext);
  let song = {
    albumArt: albumArt,
    title: title,
    artist: artist,
    duration: duration,
    accent: accent,
    songindex: songindex,
    songurl: songurl,
    songid: songid,
  };

  const handleClick = () => {
    setSelectedColor(accent);
    setSelectedSong(song);
    // console.log(selectedSong);
  };

  return (
    <div
      className="song-item"
      onClick={handleClick}
      style={{
        backgroundColor: selectedColor ? `${selectedColor}50` : "transparent", // Adding transparency to the selected color
      }}
    >
      <img src={albumArt} alt={`${title} album art`} className="album-art" />
      <div className="song-info">
        <div className="song-title">{title}</div>
        <div className="song-artist">{artist}</div>
      </div>
      <div className="song-duration">{duration}</div>
    </div>
  );
};

export default SongItem;
