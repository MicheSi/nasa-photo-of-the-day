import React from "react";
import "./App.css";
// components
import PhotoCard from "./components/PhotoCard";
import NavBar from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <NavBar />
      <PhotoCard />
    </div>
  );
}

export default App;
