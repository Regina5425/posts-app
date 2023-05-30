import React from "react";
import { Routes, Route } from "react-router";
import MainPage from "./../../pages/MainPage";
import AboutMePage from "../../pages/AboutMePage";
import AboutUserPage from "../../pages/AboutUserPage";
import Layout from "../Layout";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path='/about-me' element={<AboutMePage />} />
        <Route path='/about-user/:id' element={<AboutUserPage />} />
      </Route>
    </Routes>
  );
};

export default App;
