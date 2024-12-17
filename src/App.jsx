/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import Layout from "./layout/Layout";
import { Route, Routes } from "react-router-dom";
import Category from "./pages/Category";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import GifPage from "./pages/GifPage";
import MyList from "./pages/MyList";
import GifProvider from "./context/Context";

function App() {
  return (
    <GifProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/:category" element={<Category />} />
          <Route path="/search/:query" element={<SearchPage />} />
          <Route path="/:type/:slug" element={<GifPage />} />
          <Route path="/favourites" element={<MyList />} />
        </Route>
      </Routes>
    </GifProvider>
  );
}

export default App;
