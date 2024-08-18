import "./App.css";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  return (
    <div className="container">
      <div className="parent">
        <NavBar />
        <SideBar />
        <MusicPlayer />
      </div>
    </div>
  );
}

export default App;
