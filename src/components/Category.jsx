import React, { useContext, useState } from "react";
import "./style/Category.css";
import { MyContext } from "./context/searchcontext";

export default function Category() {
  const { foryou, setForYou } = useContext(MyContext);

  const onClickHandler = (clickname) => {
    if (clickname === "foryou") {
      setForYou(true);
    } else if (clickname === "toptracks") {
      setForYou(false);
    }
    console.log(foryou);
  };
  return (
    <div className="category">
      <div
        id="categoryitem1"
        style={{
          color: foryou ? "white" : "black",
          transition: "color 0.5s ease",
        }}
        onClick={() => onClickHandler("foryou")}
      >
        For You
      </div>
      <div
        id="categoryitem2"
        style={{
          color: !foryou ? "white" : "black",
          transition: "color 0.5s ease",
        }}
        onClick={() => onClickHandler("toptracks")}
      >
        Top Tracks
      </div>
    </div>
  );
}
