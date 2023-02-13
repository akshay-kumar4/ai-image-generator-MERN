import React from "react";
import { Home, CreatePost } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
