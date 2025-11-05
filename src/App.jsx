import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { GlobalStyle } from 'Styles/global.js';
import Login from 'Pages/Login/index.jsx';
import Home from 'Pages/Home/index.jsx'; 

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      
      <Routes>
        <Route path="/login" element={<Login />} />
     
        <Route path="/home" element={<Home />} />
        
        <Route path="*" element={<Navigate to="/login" />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;