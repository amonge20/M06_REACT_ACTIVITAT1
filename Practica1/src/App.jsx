import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import CustomHeader from './components/nav/Header'; 
import Home from './Pages/Home';
import Register from './Pages/Auth/Register';
import Login from './Pages/Auth/Login';

const App = () => {
  return (
    <BrowserRouter>
      <CustomHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App