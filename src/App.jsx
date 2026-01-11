import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Content from "./components/Content";
import Locations from "./components/Locations";
import Menu from "./components/Menu";
import Million from "./components/Million";
import Footer from "./components/Footer";
import Kalimati from "./components/Kalimati";
import Newbaneshwor from "./components/Newbaneshwor";
import Jhamsikel from "./components/Jhamsikel";
import Tangal from "./components/Tangal";

function Home() {
  return (
    <>
      <Hero />
      <Content />
      <Locations />
      <Menu />
      <Million />
    </>
  );
}

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/kalimati" element={<Kalimati />} />
        <Route path="/newbaneshwor" element={<Newbaneshwor />} />
        <Route path="/jhamsikhel" element={<Jhamsikel />} />
        <Route path="/tangal" element={<Tangal />} />

        
      </Routes>

      <Footer />
    </>
  );
}

export default App;
