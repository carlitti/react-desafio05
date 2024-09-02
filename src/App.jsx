import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import Pizza from "./Pages/Pizza";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from "./Pages/Profile";
import Notfound from "./Pages/Notfound";



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/p001" element={<Pizza />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/404" element={< Notfound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

