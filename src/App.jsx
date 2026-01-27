import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from './components/Hero';
import Content from "./components/Content";
import Locations from "./components/Locations";
import Menu from "./components/Menu";
import Million from "./components/Million";
import Kalimati from "./components/Kalimati";
import Newbaneshwor from "./components/Newbaneshwor";
import Jhamsikel from "./components/Jhamsikel";
import Tangal from "./components/Tangal";
import Allmenu from "./components/Allmenu";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Content/>
              <Locations />
              <Menu />
              <Million />
            </>
          }
        />

        <Route path="/menu" element={<Menu />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/kalimati" element={<Kalimati />} />
        <Route path="/newbaneshwor" element={<Newbaneshwor />} />
        <Route path="/jhamsikhel" element={<Jhamsikel />} />
        <Route path="/tangal" element={<Tangal />} />
        <Route path="/fullmenu" element={<Allmenu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
