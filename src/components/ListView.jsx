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
      const results = data.filter(
        (item) =>
          item.name.toLowerCase().includes(searchsong.toLowerCase()) ||
          item.artist.toLowerCase().includes(searchsong.toLowerCase())
      );
      setFilteredData(results);
    } else {
      setFilteredData(data); // Reset to backup when search term is cleared
    }
  }, [searchsong, data]);

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
            duration={"4:16"}
            accent={value.accent}
            songindex={index}
          />
        ))
      )}
    </div>
  );
}
