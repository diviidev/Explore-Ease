import React from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import MainBody from "./MainBody";

export default function Home() {
  return (
    <div>
      <NavBar />
      <SearchBar />
      <MainBody />
    </div>
  );
}
