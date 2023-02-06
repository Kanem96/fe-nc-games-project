import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Reviews from "./components/Reviews";

function App() {
  return (
    <div className="app">
      <Header />
      <Reviews />
    </div>
  );
}

export default App;
