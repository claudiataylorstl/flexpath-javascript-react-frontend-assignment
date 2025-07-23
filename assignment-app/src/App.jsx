import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from "./Navbar";
import Home from "./Home";
import Search from "./Search";



function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Navbar />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
     </Routes>
    </div>
  
  
  </BrowserRouter>
  
  );
}

export default App;
