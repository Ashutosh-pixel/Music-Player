import { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/searchcontext";

export default function useFetch(url, foryou) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const { playlist, setPlaylist } = useContext(MyContext);
  const { dummyplaylist, setDummyPlaylist } = useContext(MyContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const resp = await fetch(url);
        if (!resp.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await resp.json();
        // console.log("result", result.data);
        let finaldata = [];
        let songlist = [];

        //search for top_track
        if (!foryou) {
          result.data.filter((item, index) => {
            if (item.top_track) {
              finaldata.push(item);
              songlist.push({
                albumArt: `https://cms.samespace.com/assets/${item.cover}`,
                title: item.name,
                artist: item.artist,
                duration: "",
                accent: item.accent,
                songindex: index,
                songurl: item.url,
                songid: item.id,
              });
            }
          });
          setData(finaldata);
          setPlaylist(songlist);
        } else {
          setData(result.data);
          for (var i in result.data) {
            songlist.push({
              albumArt: `https://cms.samespace.com/assets/${result.data[i].cover}`,
              title: result.data[i].name,
              artist: result.data[i].artist,
              duration: "4:16",
              accent: result.data[i].accent,
              songindex: i,
              songurl: result.data[i].url,
              songid: result.data[i].id,
            });
          }
          setPlaylist(songlist);
        }

        console.log(playlist);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url, foryou]);

  return { data, loading, error };
}
