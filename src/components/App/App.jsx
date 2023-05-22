import React from "react";
import { Routes, Route } from "react-router";
import MainPage from "./../../pages/MainPage";
import AboutMe from "../../pages/AboutMe";
import AboutUser from "../../pages/AboutUser";
import Layout from "../Layout";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path='/about-me' element={<AboutMe />} />
        <Route path='/about-user' element={<AboutUser />} />
      </Route>
    </Routes>
  );
}

export default App;
