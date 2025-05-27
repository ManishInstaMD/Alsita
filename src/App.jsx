// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Tabs from "./components/Tabs/Tabs";
import Footer from "./components/Footer/Footer";
import About from "./components/Pages/About";
import Patient from "./components/Pages/Patient";
import Medicine from "./components/Pages/Medicine";
import "./App.css";
import DietChart from "./components/Pages/DietChart";
import "./i18n";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div className="wrapper" id="wrapper">
                    <Banner />
                    <Tabs />
                  </div>
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/Patient" element={<Patient />} />
            <Route path="/DietChart" element={<DietChart />} />
            <Route path="/Medicine" element={<Medicine />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
