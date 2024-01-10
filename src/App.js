import React from 'react';
import Home from './Home';
import Projects from './Projects';
import Tools from './Tools';
import Research from './Research';
import Team from './Team';
import About from './About';
import {BrowserRouter} from "react-router-dom";
import { Route, Routes } from "react-router-dom";

export default function App () {
    return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/tools" element={<Tools/>} />
          <Route path="/research" element={<Research/>} />
          <Route path="/team" element={<Team/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

