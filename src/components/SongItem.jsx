import React, { useContext } from "react";
import "./style/SongItem.css";
import { MyContext } from "./context/searchcontext";

const SongItem = ({ albumArt, title, artist, duration, accent, songindex }) => {
  const { selectedColor, setSelectedColor } = useContext(MyContext);

  const handleClick = () => {
    setSelectedColor(accent);
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
