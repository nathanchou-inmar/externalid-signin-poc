import { useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import Signin from "./Pages/Signin";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App