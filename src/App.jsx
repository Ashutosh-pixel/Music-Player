import "./App.css";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import MusicPlayer from "./components/MusicPlayer";
import { useContext } from "react";
import { MyContext } from "./components/context/searchcontext";

function App() {
  const { selectedColor } = useContext(MyContext);

  return (
    <div
      className="container"
      style={{
        background: selectedColor
          ? `linear-gradient(135deg, ${selectedColor}80, ${selectedColor}50)`
          : "linear-gradient(135deg, #424242, #333333)",
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
