import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "./main";
import RootLayout from "../layout/root-layout";
import { NotFoundPage } from "./not-found";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route path="" element={<MainPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
