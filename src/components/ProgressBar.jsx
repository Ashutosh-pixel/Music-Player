import React from "react";
// import './style/ProgressBar.css'

export default function ProgressBar({ currentTime, duration }) {
  return (
    <div
      style={{ width: "100%", display: "flex", justifyContent: "center" }}
      className="progress"
    >
      <div
        style={{
          width: "95%",
          height: "10px",
          backgroundColor: "rgba(255,255,255,0.1)",
          borderRadius: "100px",
        }}
        className="progress-value"
      >
        <div
          style={{
            width: `${(currentTime / duration) * 100}%`,
            height: "100%",
            backgroundColor: "#ffffff",
            borderRadius: "100px",
          }}
        ></div>
      </div>
    </div>
  );
}
