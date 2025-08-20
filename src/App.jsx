import React from "react";
import { BrowserRouter,Routes, Route } from "react-router";
import Login from "./pages/Auth/Login";
import './App.css'
import Dashboard from "./pages/Dashboard";
import Sales from "./pages/Sales";
import InvoiceGenerator from "./pages/InvoiceGenerator";


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sales" element={<Sales/>}/>
        <Route path="/invoice" element={<InvoiceGenerator/>}/>
        
      </Routes>
    </BrowserRouter>
      
    </>
  );
};

export default App;
