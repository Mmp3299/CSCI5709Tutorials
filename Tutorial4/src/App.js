import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import ProfileListing from './ProfileListing';
import ProfileDetail from './ProfileDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profiles" element={<ProfileListing />} />
        <Route path="/profile/:id" element={<ProfileDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;