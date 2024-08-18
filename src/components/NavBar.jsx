import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../App.css";
import { faUser } from "@fortawesome/free-regular-svg-icons";

export default function NavBar() {
  return (
    <div id="navbar" className="flex">
      <span>
        <FontAwesomeIcon
          icon={faSpotify}
          style={{ color: "#292929" }}
          size="2xl"
        />
      </span>
      <span id="spotify">Spotify</span>
      <span id="profile">
        <FontAwesomeIcon icon={faUser} size="xl" style={{ color: "#292929" }} />
      </span>
    </div>
  );
}
