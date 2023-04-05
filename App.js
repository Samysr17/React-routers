import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import About from './About'
import Navbar from "./Navbar";
import Projects from "./Projects";
import Interests from "./Interests";

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<Navbar/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/projects" element={<Projects/>}/>
  <Route path="/interests" element={<Interests/>}/>
</Routes>
</BrowserRouter>
  );
}

export default App;
