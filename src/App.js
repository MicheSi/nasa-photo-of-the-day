import React from "react";
import "./App.css";
// components
import PhotoData from "./components/PhotoData";
import PhotoCard from "./components/PhotoCard";

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <PhotoData />
    </div>
  );
}

export default App;
