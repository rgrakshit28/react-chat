import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/signup" element={<Signup />} exact />
      <Route path="/login" element={<Login />} exact />
    </Routes>
  );
};

export default App;
