import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import MusicPlayer from "./components/MusicPlayer";
import { MyContext } from "./components/context/searchcontext";

function App() {
  const { selectedColor } = useContext(MyContext);
  const [background, setBackground] = useState(
    "linear-gradient(45deg, #424242, #333333)"
  );

  useEffect(() => {
    const newBackground = selectedColor
      ? `linear-gradient(135deg, ${selectedColor}80, ${selectedColor}50)`
      : "linear-gradient(135deg, #0A092F95, #33333380)";

    const timeoutId = setTimeout(() => {
      setBackground(newBackground);
    }, 100); // Set a small timeout to ensure transition

    return () => clearTimeout(timeoutId); // Clean up the timeout if the component unmounts or selectedColor changes
  }, [selectedColor]);

  return (
    <div
      className="container"
      style={{
        background,
        transition: "background 0.5s ease-in-out", // Apply transition directly here
      }}
    >
      <div className="parent">
        <NavBar />
        <SideBar />
        <MusicPlayer />
      </div>
    </div>
  );
}

export default App;
