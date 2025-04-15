import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RegisterPage } from './features/survivors/pages/RegisterPage';
import { UpdateLocationPage } from './features/survivors/pages/UpdateLocationPage';
import { SurvivorProfilePage } from './features/survivors/pages/SurvivorProfilePage';
import {
  ReportInfectionPage
} from "./features/survivors/pages/ReportInfectionPage";
import {TradePage} from "./features/resources/pages/TradePage";

function App() {
  return (
    <Router>
      <nav style={{ marginBottom: '1rem' }}>
        <a href="/" style={{ marginRight: '1rem' }}>Register</a>
        <a href="/update-location" style={{ marginRight: '1rem' }}>Update Location</a>
        <a href="/report-infection" style={{ marginRight: '1rem' }}>Report Infection</a>
        <a href="/profile" style={{ marginRight: '1rem' }}>Profile</a>
        <a href="/trade">Trade</a>
      </nav>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/update-location" element={<UpdateLocationPage />} />
        <Route path="/report-infection" element={<ReportInfectionPage />} />
        <Route path="/profile" element={<SurvivorProfilePage />} />
        <Route path="/trade" element={<TradePage />} />
      </Routes>
    </Router>
  );
}

export default App;
