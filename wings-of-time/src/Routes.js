import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import Home from './Pages/Home';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;