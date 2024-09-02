import React, { useContext, useEffect, useState } from "react";
import "./style/ListView.css";
import SongItem from "./SongItem";
import useFetch from "./hooks/useFetch";
import Loader from "./Loader";
import { MyContext } from "./context/searchcontext";

export default function ListView() {
  const { foryou } = useContext(MyContext);
  const { data, loading, error } = useFetch(
    "https://cms.samespace.com/items/songs",
    foryou
  );
  const [filteredData, setFilteredData] = useState([]);

  const { searchsong } = useContext(MyContext);

  useEffect(() => {
    if (searchsong) {
      const results = data
        .map((item) => ({
          ...item,
          duration: null, // Initialize duration as null
        }))
        .filter(
          (item) =>
            item.name.toLowerCase().includes(searchsong.toLowerCase()) ||
            item.artist.toLowerCase().includes(searchsong.toLowerCase())
        );
      setFilteredData(results);
    } else {
      // Initialize the duration to null for all songs initially
      const initializedData = data.map((item) => ({
        ...item,
        duration: null, // Initialize duration as null
      }));
      setFilteredData(initializedData);
    }
  }, [searchsong, data]);

  // Function to format duration from seconds to MM:SS
  const formatDuration = (durationInSeconds) => {
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = Math.floor(durationInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // Function to load audio and get duration
  const getSongDuration = (url, index) => {
    const audio = new Audio(url);
    audio.addEventListener("loadedmetadata", () => {
      const durationInSeconds = audio.duration;
      setFilteredData((prevData) =>
        prevData.map((item, i) =>
          i === index ? { ...item, duration: durationInSeconds } : item
        )
      );
    });
  };

  useEffect(() => {
    if (filteredData.length > 0) {
      filteredData.forEach((song, index) => {
        if (!song.duration && song.url) {
          getSongDuration(song.url, index); // Use the actual song URL directly
        }
      });
    }
  }, [filteredData]);

  return (
    <div className="listview">
      {error ? (
        <div>Error: {error.message}</div>
      ) : loading || data == null ? (
        <Loader />
      ) : (
        filteredData.map((value, index) => (
          <SongItem
            key={index}
            albumArt={`https://cms.samespace.com/assets/${value.cover}`}
            title={value.name}
            artist={value.artist}
            duration={
              value.duration !== null
                ? formatDuration(value.duration)
                : "Loading..."
            }
            accent={value.accent}
            songindex={index}
            songurl={value.url}
            songid={value.id}
          />
        ))
      )}
    </div>
  );
}
