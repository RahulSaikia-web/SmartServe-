import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from "./components/Home/HeroSection"
function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<HeroSection />}/>
      </Routes>
    </>
  )
}

export default App
