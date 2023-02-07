import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Review from "./components/Review";
import Reviews from "./components/Reviews";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/reviews" element={<Reviews />}></Route>
          <Route path="/reviews/:id" element={<Review />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
