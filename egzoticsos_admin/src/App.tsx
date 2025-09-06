import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import styles from "./App.module.scss";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";

const App:React.FC = () => {
  return (
    <div className={styles.App}>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
