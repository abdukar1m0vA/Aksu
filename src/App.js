import React from "react";
import { Route, Routes } from "react-router-dom"
import Aloqa from "./pages/Aloqa/Aloqa";
import BizHaqimizda from "./pages/BizHaqimizda/BizHaqimizda";
import Home from "./pages/Home";
import Menu from "./pages/Menu/Menu";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aloqa" element={<Aloqa/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/bizHaqimizda" element={<BizHaqimizda/>}/>
      </Routes>
    </div>
  );
}

export default App;
