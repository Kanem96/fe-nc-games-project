import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Reviews from "./components/Reviews";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/reviews" element={<Reviews />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
