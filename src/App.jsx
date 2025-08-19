import React from "react";
import { BrowserRouter,Routes, Route } from "react-router";
import Login from "./pages/Auth/Login";
import './App.css'
import Dashboard from "./pages/Dashboard";


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
      
    </>
  );
};

export default App;
