import React from "react";
import Category from "./Category";
import SearchBar from "./SearchBar";
import ListView from "./ListView";

export default function SideBar() {
  return (
    <div id="sidebar" className="flex ">
      <Category />
      <SearchBar />
      <ListView />
    </div>
  );
}
