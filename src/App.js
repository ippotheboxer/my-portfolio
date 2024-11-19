import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// Style
import './App.css';

//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Projects from "./pages/Projects";

// Components
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home /> }></Route>
        <Route path='/home' element={<Home /> } />
        <Route path='/about' element={<About /> } />
        <Route path='/work' element={<Work /> } />
        <Route path='/projects' element={<Projects /> } />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
