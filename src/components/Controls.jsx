import React, { useContext, useEffect, useRef, useState } from "react";
import { MyContext } from "./context/searchcontext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePause,
  faCirclePlay,
} from "@fortawesome/free-regular-svg-icons";
import { faBackward } from "@fortawesome/free-solid-svg-icons/faBackward";
import { faForward } from "@fortawesome/free-solid-svg-icons/faForward";
import ProgressBar from "./ProgressBar";

export default function Controls() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const { playlist } = useContext(MyContext);
  const { selectedSong, setSelectedSong } = useContext(MyContext);

  let index = 0;

  useEffect(() => {
    if (playlist.length > 0 && selectedSong) {
      for (var i = 0; i < playlist.length; i++) {
        if (playlist[i].songid === selectedSong.songid) {
          audioRef.current.src = playlist[i].songurl;
        }
      }
      if (isPlaying) {
        audioRef.current.play();
      }

      //
      if (audioRef.current) {
        audioRef.current.addEventListener("loadedmetadata", () => {
          setDuration(audioRef.current.duration);
        });
        audioRef.current.addEventListener("timeupdate", () => {
          setCurrentTime(audioRef.current.currentTime);
        });

        audioRef.current.addEventListener("ended", () => {
          NextSongHandler();
        });
      }
    }
    console.log("audioref", audioRef.current.src);
  }, [selectedSong]);

  useEffect(() => {
    if (playlist.length > 0) {
      index = 0;
      // audioRef.current.src = playlist[0].songurl;
      // setSelectedSong(playlist[0]);
      setSelectedSong(playlist[index % playlist.length]);
      audioRef.current.pause();
    }
    // console.log("playlisteffect", playlist);
  }, [playlist]);

  function SongPlayHandler() {
    if (playlist.length > 0 && selectedSong && audioRef) {
      // audioRef.current.src = playlist[selectedSong.songindex];
      if (!isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
      setIsPlaying((prev) => !prev);
    }
  }

  function NextSongHandler() {
    if (playlist.length > 0 && selectedSong && audioRef) {
      for (var i = 0; i < playlist.length; i++) {
        if (playlist[i].songid === selectedSong.songid) {
          index = i;
        }
      }
      index++;
      setSelectedSong(playlist[index % playlist.length]);
      if (isPlaying) {
        audioRef.current.play();
      }
    }
    // console.log("index", index);
    // console.log("playlist", playlist);
    // console.log("playlisteffect", playlist);
  }

  function PrevSongHandler() {
    if (playlist.length > 0 && selectedSong && audioRef) {
      let index = playlist.findIndex(
        (song) => song.songid === selectedSong.songid
      );

      // If the selected song is the first one, wrap around to the last song in the playlist.
      if (index <= 0) {
        index = playlist.length - 1;
      } else {
        index--;
      }

      // Set the selected song to the previous one in the playlist.
      setSelectedSong(playlist[index]);

      // If a song is currently playing, continue playing the newly selected song.
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }

  return (
    <div className="controlparent flex">
      <audio ref={audioRef} src=""></audio>
      <ProgressBar currentTime={currentTime} duration={duration} />
      <div className="controlbuttons flex">
        <FontAwesomeIcon
          id="controlbutton"
          onClick={PrevSongHandler}
          icon={faBackward}
          bounce={!isPlaying}
          size="2xl"
          style={{ color: "#ffffff" }}
        />
        <FontAwesomeIcon
          id="controlbutton"
          onClick={SongPlayHandler}
          icon={isPlaying ? faCirclePause : faCirclePlay}
          spin={isPlaying}
          size="2xl"
          style={{ color: "#ffffff" }}
        />
        <FontAwesomeIcon
          id="controlbutton"
          onClick={NextSongHandler}
          bounce={!isPlaying}
          icon={faForward}
          size="2xl"
          style={{ color: "#ffffff" }}
        />
      </div>
    </div>
  );
}
