import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Reviews from "./components/Reviews";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Reviews />
      </div>
    </BrowserRouter>
  );
}

export default App;
