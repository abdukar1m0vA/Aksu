import React from "react";
import { Route, Routes } from "react-router-dom"
import Aloqa from "./components/Aloqa/Aloqa";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aloqa" element={<Aloqa/>}/>
      </Routes>
    </div>
  );
}

export default App;
